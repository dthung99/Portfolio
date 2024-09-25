import { createContext, useState, useRef } from 'react';

// Create a context
const CurrentPageContext = createContext(); // For tracking login status and root

// Create a provider component
const ContextProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState('/'); // Current page path

    return (
        <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
        </CurrentPageContext.Provider>
    );
};

export { CurrentPageContext };

export default ContextProvider;