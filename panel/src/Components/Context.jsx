import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const Context = createContext(null);

const ContextProvider = (props) => {
    const endpoint = `${process.env.REACT_APP_BACKEND}/images/`;
    const [allProducts, setAllProducts] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    const [allImages, setAllImages] = useState([]);
    const [allTexts, setAllTexts] = useState([]);        
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'));

    const submitTexts = () => {
        axios.post(`${process.env.REACT_APP_BACKEND}/submit-texts`, {texts: allTexts})
        .then((response) => {                         
            return response;
        })
    }

    const login = async(username, password) => {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND}/login`, {username: username, password: password})

        if(response.data.success){
            localStorage.setItem('isAdmin', true)
            setIsAdmin(true);            
        }

        return {success: response.data.success};
    }

    const contextValue = {allProducts, endpoint, allMessages, allImages, allTexts, setAllTexts, submitTexts, isAdmin, login};    

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND}/api/all-products`)
        .then((response) => {                         
            setAllProducts(response.data)
        })

        axios.get(`${process.env.REACT_APP_BACKEND}/api/all-messages`)
        .then((response) => {          
            setAllMessages(response.data);                        
        });

        axios.get(`${process.env.REACT_APP_BACKEND}/uploads`)
        .then((response)=>{
            let imagesPaths = [];        
            response.data.map((data) => {
                imagesPaths.push(data)
            })
            setAllImages(imagesPaths);
        });

        axios.get(`${process.env.REACT_APP_BACKEND}/api/all-texts`)
        .then((response)=>{
            if(response){               
                setAllTexts(response.data);
            }            
        });
    }, []);

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;