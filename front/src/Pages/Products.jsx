import React, { useContext, useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { Context } from "../Components/Context";
import CategoryMenu from "../Components/CategoryMenu";
import ProductMenu from '../Components/ProductMenu';
import { useParams } from "react-router-dom";
import bgwheel from '../assets/bg2k.jpg';

const Products = () => {
    const {isDesktop, allProducts} = useContext(Context);
    const [items, setItems] = useState([]);
    const {category} = useParams();
    
    useEffect(()=>{
        setItems([]);

        let sortedData;
        if(category){
            sortedData = allProducts.filter(product => product.tag === category);
        }else{
            sortedData = allProducts;                
        }

        sortedData.map(product => {
            setItems((prevItems) => [...prevItems, product]);                
        });
    });
    
        return(
            <Box sx={{
                height: '100vh',
                width: '100%',          
                backgroundImage: `url(${bgwheel})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',  
                overflow: 'hidden'
            }}>            
                <Box sx={{ padding: 5, height: '100%' }}>                                                           
                    <Stack spacing={{lg: 4, md: 4}} alignItems='center'>
                        <CategoryMenu tag={category}/>                            
                        <ProductMenu items={items}/>
                    </Stack>                         
                </Box>      
            </Box>
        );
}

export default Products;