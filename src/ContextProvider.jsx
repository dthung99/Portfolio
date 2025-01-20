import { createContext, useState } from 'react';

// Create a context
const CurrentPageContext = createContext(); // For tracking login status and root
const ChatbotContext = createContext(); // For tracking login status and root

// Create a provider component
const ContextProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('/'); // Current page path
    const [chatbotMsg, setChatbotMsg] = useState([{ content: 'Hello, I\'m Hung\'s AI assistant. Ask me and I\'ll tell you more about him!', role: 'assistant' }]); // First chatbot msg
    const [isChatbotStarted, setIsChatbotStarted] = useState(false); // First chatbot status

    return (
        <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
            <ChatbotContext.Provider value={{ chatbotMsg, setChatbotMsg, isChatbotStarted, setIsChatbotStarted }}>
                {children}
            </ChatbotContext.Provider>
        </CurrentPageContext.Provider>
    );
};

export { CurrentPageContext, ChatbotContext };

export default ContextProvider;