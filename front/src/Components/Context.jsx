import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

const ContextProvider = (props) => {
    const [isDesktop, setIsDesktop] = useState(true);
    const endpoint = `${process.env.REACT_APP_BACKEND}/images/`;

    const [settings, setSettings] = useState({
        'theme': 'light',
        'lang': 'Ελληνικά',
    });
    const [allProducts, setAllProducts] = useState([]);
    const contextValue = {isDesktop, setIsDesktop, settings, setSettings, allProducts, endpoint};    

    useEffect(()=>{
        console.log(process.env.REACT_APP_BACKEND)
        fetch(`${process.env.REACT_APP_BACKEND}/products`)
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