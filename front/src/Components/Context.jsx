import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

const ContextProvider = (props) => {
    const [isDesktop, setIsDesktop] = useState(true);
    const [settings, setSettings] = useState({
        'theme': 'light',
        'lang': 'Ελληνικά',
    });
    const [allProducts, setAllProducts] = useState([]);
    const contextValue = {isDesktop, setIsDesktop, settings, setSettings, allProducts};    

    useEffect(()=>{
        fetch("http://192.168.1.13:4300/products")
        .then(((response) => response.json()))
        .then((data) => {
            setAllProducts(data);
        });
    }, []);

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;