import { createContext, useState, useEffect } from "react";

export const Context = createContext(null);

const ContextProvider = (props) => {
    const [isDesktop, setIsDesktop] = useState(true);
    const endpoint = `${process.env.REACT_APP_BACKEND}/images/`;
    const [allProducts, setAllProducts] = useState([]);
    const [navSelection, setNavSelection] = useState(0);

    const contextValue = {isDesktop, setIsDesktop, allProducts, endpoint, navSelection, setNavSelection};    

    useEffect(()=>{   
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