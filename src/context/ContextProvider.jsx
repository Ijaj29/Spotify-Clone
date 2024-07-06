import { createContext, useContext, useState } from "react";

const StateContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [loginData, setLoginData] = useState('');
    const IMG_URL = 'http://localhost:3000';

    return (
        <StateContext.Provider value={{ loginData, setLoginData, IMG_URL }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);