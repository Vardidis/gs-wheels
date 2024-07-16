import { createContext, useState } from "react";

export const Context = createContext(null);

const ContextProvider = (props) => {
    const [isDesktop, setIsDesktop] = useState(true);
    const [settings, setSettings] = useState({
        'theme': 'light',
        'lang': 'Ελληνικά',
    })
    const contextValue = {isDesktop, setIsDesktop, settings, setSettings};    

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;