import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const Context = createContext(null);

const ContextProvider = (props) => {
    const [isDesktop, setIsDesktop] = useState(true);
    const endpoint = `${process.env.REACT_APP_BACKEND}/images/`;
    const [allProducts, setAllProducts] = useState([]);
    const [allMessages, setAllMessages] = useState([]);
    const [allImages, setAllImages] = useState([]);
    const [allTexts, setAllTexts] = useState([]);        
    const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin'));
    const [allStories, setAllStories] = useState([]);

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

    const fetchProducts = async() => {
        axios.get(`${process.env.REACT_APP_BACKEND}/api/all-products`)
        .then((response) => {                         
            setAllProducts(response.data);
        })
    }

    const contextValue = {allProducts, fetchProducts, allStories, endpoint, allMessages, allImages, allTexts, setAllTexts, submitTexts, isAdmin, login, isDesktop, setIsDesktop};    

    useEffect(()=>{
        fetchProducts();

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

        axios.get(`${process.env.REACT_APP_BACKEND}/api/all-success-stories`)
        .then((response) => {                         
            setAllStories(response.data)
        })
    }, []);

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;