import React, { useContext, useEffect, useState } from "react";
import { Stack, Box, Divider } from "@mui/material";
import { Context } from "../Components/Context";
import CategoryMenu from "../Components/CategoryMenu";
import ProductTopRow from '../Components/ProductTopRow';
import ProductMenu from '../Components/ProductMenu';
import { useParams } from "react-router-dom";

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
    
    if(isDesktop){
        return(
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 3 }}>          
                <Stack spacing={10} sx={{ width: {xl: 1200, lg: 880, md: 740}, paddingTop: 3 }}>     
                    <ProductTopRow/>               
                    <Stack direction='row' spacing={{lg: 4, md: 2}}>
                        <CategoryMenu tag={category}/>
                        <Divider orientation="vertical"/>
                        <ProductMenu items={items}/>
                    </Stack> 
                </Stack>
            </Box>      
        );
    }else{
        return(
            <Box sx={{ paddingLeft: {sm: 6, xs: 3, xxs: 2}, paddingRight: {sm: 3, xs: 3, xxs: 2}, paddingBottom: 3 }}>          
                <Stack spacing={5} sx={{ paddingTop: 3 }}>     
                    <ProductTopRow/>                
                    <Stack spacing={3}>
                        <CategoryMenu/>
                        <ProductMenu items={items}/>
                    </Stack>           
                </Stack>
            </Box>      
        )
    }
}

export default Products;