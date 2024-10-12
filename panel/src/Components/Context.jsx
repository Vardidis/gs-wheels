import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

const ContextProvider = (props) => {
    const endpoint = `${process.env.REACT_APP_BACKEND}/images/`;
    const [allProducts, setAllProducts] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    const [allImages, setAllImages] = useState([]);

    const contextValue = {allProducts, endpoint, allMessages, allImages};    

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_BACKEND}/products`)
        .then(((response) => response.json()))
        .then((data) => {
            setAllProducts(data);
        });

        fetch(`${process.env.REACT_APP_BACKEND}/messages`)
        .then(((response) => response.json()))
        .then((data) => {
            setAllMessages(data.messages);                        
        });

        fetch(`${process.env.REACT_APP_BACKEND}/uploads`)
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