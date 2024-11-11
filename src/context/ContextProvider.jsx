import { createContext, useContext, useState } from "react";

const StateContext = createContext({});

export const ContextProvider = ({ children }) => {
    const [loginData, setLoginData] = useState('');
    const IMG_URL = 'https://ijaj29.github.io/Spotify-Clone';

    return (
        <StateContext.Provider value={{ loginData, setLoginData, IMG_URL }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);