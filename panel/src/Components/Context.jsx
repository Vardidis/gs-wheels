import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const Context = createContext(null);

const ContextProvider = (props) => {
    const endpoint = `${process.env.REACT_APP_BACKEND}/images/`;
    const [allProducts, setAllProducts] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    const [allImages, setAllImages] = useState([]);

    const contextValue = {allProducts, endpoint, allMessages, allImages};    

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND}/api/all-products`)
        .then((response) => {
            setAllProducts(response.data)
        })

        axios.get(`${process.env.REACT_APP_BACKEND}/api/all-messages`)
        .then((response) => {          
            setAllMessages(response.data);                        
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