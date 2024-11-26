import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const Context = createContext(null);

const ContextProvider = (props) => {
    const [isDesktop, setIsDesktop] = useState(true);
    const [allProducts, setAllProducts] = useState([]);
    const [navSelection, setNavSelection] = useState(0);
    const [allTexts, setAllTexts] = useState([]);

    const contextValue = {isDesktop, setIsDesktop, allProducts, navSelection, setNavSelection, allTexts};    

    useEffect(()=>{   
        axios.get(`${process.env.REACT_APP_BACKEND}/api/all-products`)
        .then((response) => {    
            setAllProducts(response.data);              
        });

        axios.get(`${process.env.REACT_APP_BACKEND}/api/all-texts`)
        .then((response) => {
            setAllTexts(response.data);
        })
    }, []);    

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;