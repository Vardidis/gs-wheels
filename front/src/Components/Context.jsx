import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const Context = createContext(null);

const ContextProvider = (props) => {
    const [isDesktop, setIsDesktop] = useState(true);
    const [allProducts, setAllProducts] = useState([]);
    const [navSelection, setNavSelection] = useState(0);

    const contextValue = {isDesktop, setIsDesktop, allProducts, navSelection, setNavSelection};    

    useEffect(()=>{   
        axios.get(`${process.env.REACT_APP_BACKEND}/api/all-products`)
        .then((response) => {    
            setAllProducts(response.data);              
        })
    }, []);    

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;