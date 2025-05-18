import React, { useContext, useEffect, useState } from "react";
import { Stack, Box } from "@mui/material";
import { Context } from "../Components/Context";
import CategoryMenu from "../Components/CategoryMenu";
import ProductMenu from '../Components/ProductMenu';
import { useParams } from "react-router-dom";
import Wheelchairs from "../Components/ProductCategories/Wheelchairs";
import Parts from "../Components/ProductCategories/Parts";

const Products = () => {
    const {allProducts} = useContext(Context);
    const [items, setItems] = useState([]);
    const {category} = useParams();
    
    useEffect(()=>{
        setItems([]);
            
        let sortedData;
        if(category){
            console.log(category)
            sortedData = allProducts.filter(product => product.tag === category);
        }else{
            sortedData = allProducts;                
        }

        sortedData.map(product => {
            setItems((prevItems) => [...prevItems, product]);                
        });
    }, [category, allProducts]);    
    
    return(                    
        <Box
            sx={{               
                background: 'linear-gradient(#c5c5c5, #e5e5e5, #ffffff)',
                minHeight: '70vh'
            }}
        >                       
            <Stack
                spacing={4}                
            >
                <CategoryMenu tag={category}/>         
                {category === 'wheelchairs' &&
                    <Wheelchairs/>
                }        
                {category === 'parts' &&
                    <Parts/>
                }     
                {category === 'helpers' &&
                    <ProductMenu items={items}/>
                }        
                {category === undefined &&
                    <ProductMenu items={items}/>
                }                        
            </Stack>                         
        </Box>                
    );        
}

export default Products;