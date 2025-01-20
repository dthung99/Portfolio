import OpenAI from "openai";
import { ApiGatewayManagementApiClient, PostToConnectionCommand } from "@aws-sdk/client-apigatewaymanagementapi";
import systemPrompt from "./systemPrompt.mjs";

const openai = new OpenAI();

// Function to trim input msg from user
const getMessagesUnderWordCountCutoff = (messages, cutoff) => {
    let totalWords = 0;
    const selectedMessages = [];

    // Iterate from the end to the beginning
    for (let i = messages.length - 1; i >= 0; i--) {
        const wordCount = messages[i].content.split(/\s+/).length;

        if (totalWords + wordCount < cutoff) {
            totalWords += wordCount;
            selectedMessages.unshift(messages[i]); // Add to the beginning
        } else {
            break; // Stop if adding this message exceeds the cutoff
        }
    }
    return selectedMessages;
};

export const handler = async (event) => {
    try {
        // Extract connection info
        const connectionId = event.requestContext.connectionId;
        const endpoint = `https://${event.requestContext.domainName}/${event.requestContext.stage}`;

        // Initialize API Gateway client
        const callbackAPI = new ApiGatewayManagementApiClient({
            apiVersion: '2018-11-29',
            endpoint: endpoint,
        });

        // Parse message safely
        var message;
        try {
            message = JSON.parse(event.body).message;
        } catch (parseError) {
            console.error('Error parsing message:', parseError);
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid message format' })
            };
        }
        // Trim the neccessary msg
        message = getMessagesUnderWordCountCutoff(message, 2048);
        // Add system prompt
        message.unshift(systemPrompt);

        // MAIN CODE
        // Ask chatgpt
        var chat_gpt_msg;
        var chat_completion;
        chat_completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: message,
        });
        chat_gpt_msg = chat_completion.choices[0].message.content;

        // SEND BACK TO WEBSOCKET
        // Set up the msg to send back
        const command = new PostToConnectionCommand({
            ConnectionId: connectionId,
            Data: JSON.stringify(chat_gpt_msg),
        });

        // Send the message
        await callbackAPI.send(command);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Message sent successfully' })
        };

    } catch (error) {
        console.error('Error in WebSocket handler:', error);

        // Handle specific AWS SDK errors
        if (error.name === 'GoneException') {
            return {
                statusCode: 410,
                body: JSON.stringify({ error: 'Connection is no longer available' })
            };
        }

        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Internal server error',
                message: error.message
            })
        };
    }
};