import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

const ContextProvider = (props) => {
    const [isDesktop, setIsDesktop] = useState(true);
    const endpoint = 'http://192.168.1.13:4300/images/';

    const [allProducts, setAllProducts] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    const [allImages, setAllImages] = useState([]);

    const contextValue = {allProducts, endpoint, allMessages, allImages};    

    useEffect(()=>{
        fetch("http://192.168.1.13:4300/products")
        .then(((response) => response.json()))
        .then((data) => {
            setAllProducts(data);
        });

        fetch("http://192.168.1.13:4300/messages")
        .then(((response) => response.json()))
        .then((data) => {
            setAllMessages(data.messages);                        
        });

        fetch("http://192.168.1.13:4300/uploads")
        .then(((response) => response.json()))
        .then((data) => {
            setAllImages(data.files);                        
        });
    }, []);

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;