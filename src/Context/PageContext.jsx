import { createContext, useState } from "react";

export const PageContext = createContext()

export const PageProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || "/");

    const contextValues = {
        currentPath,
        setCurrentPath,
    };

    return (
        <PageContext.Provider value={contextValues}>
            {children}
        </PageContext.Provider>
    );
};
