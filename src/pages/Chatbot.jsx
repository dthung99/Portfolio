import React, { useState, useRef, useEffect, useContext } from 'react';

import { ChatbotContext } from '../ContextProvider';

import './Chatbot.scss'
import { CodeSquare } from 'lucide-react';

const Chatbot = () => {

    // Declare some hook
    const { chatbotMsg, setChatbotMsg, isChatbotStarted, setIsChatbotStarted } = useContext(ChatbotContext);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false); // For showing the chatbot is asking the backend
    const chatWindowRef = useRef(null);
    // connection to the chatbot backend for text generation
    const text_ws = useRef(null);
    useEffect(() => {
        text_ws.current = new WebSocket('wss://dm4s285bvh.execute-api.eu-west-2.amazonaws.com/production')
        text_ws.current.onopen = () => {
            console.log('WebSocket connection established');
        };
        // Set msg when chatbot reply
        text_ws.current.onmessage = (event) => {
            try {
                let receivedMsg = JSON.parse(event.data)
                if (!(receivedMsg?.message === 'Internal server error')) {
                    setChatbotMsg(prevMessages => [...prevMessages, { content: receivedMsg, role: 'assistant' }]);
                } else {
                    setChatbotMsg(prevMessages => [...prevMessages, { content: 'It took me some time to process your last question. I recommend trying a different one or reloading the page. Providing this answer is quite costly for Hung!', role: 'assistant' }]);
                }
            } catch {
                setChatbotMsg(prevMessages => [...prevMessages, { content: 'It took me some time to process your last question. I recommend trying a different one or reloading the page. Providing this answer is quite costly for Hung!', role: 'assistant' }]);
            } finally {
                setIsLoading(false);
            }
        };
        text_ws.current.onclose = () => {
            console.log('WebSocket connection closed');
        };
        return () => {
            text_ws.current.close();
        }
    }, []);

    // Handle send request
    const handleSend = () => {
        if (input.trim()) {
            setChatbotMsg(prevMessages => [...prevMessages, { content: input, role: 'user' }]);
            setInput('');
        }
    };

    // Scroll to bottom when messages change
    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
        // Send msg to chetbot if it's user who sent  the msg
        if (chatbotMsg[chatbotMsg.length - 1].role === 'user') {
            if (text_ws.current.readyState === WebSocket.OPEN) {
                setIsLoading(true);
                var backend_msg = JSON.stringify({ action: 'sendMessage', message: chatbotMsg });
                text_ws.current.send(backend_msg);
            }
        }
    }, [chatbotMsg]);

    return (
        <>
            <div className="chatbot-big-container">
                <div className="chatbot-container">
                    <div className="chat-window" ref={chatWindowRef}>
                        {chatbotMsg.map((msg, index) => (
                            <div key={index} className={msg.role}>
                                {msg.content}
                            </div>
                        ))}
                        {isLoading &&
                            <div className="assistant">
                                loading...
                            </div>
                        }
                    </div>
                    <div className="chat-window-bottom">
                        <input
                            className='chat-input'
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type a message..."
                        />
                        <button className='chat-input-send-button' onClick={handleSend}>Send</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chatbot;