import React, { useContext, useEffect, useState } from "react";
import { Stack, Box, Divider, Typography } from "@mui/material";
import { Context } from "../Components/Context";
import CategoryMenu from "../Components/CategoryMenu";
import ProductMenu from '../Components/ProductMenu';
import { useParams } from "react-router-dom";

const Products = () => {
    const {isDesktop, allProducts, endpoint} = useContext(Context);
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
            <Box sx={{ position: 'relative', transform: 'translate(-50%)', left: '50%', width: {xl: '50%', lg: '85%', md: '95%'} }}>            
                <Box sx={{ paddingTop: 3 }}>          
                    <Stack spacing={10}>     
                        <Typography fontSize={26} fontWeight={600}>Κατάστημα</Typography>           
                        <Stack direction='row' spacing={{lg: 2, md: 1}}>
                            <CategoryMenu tag={category}/>
                            <Divider orientation="vertical"/>
                            <ProductMenu items={items}/>
                        </Stack> 
                    </Stack>
                </Box>      
            </Box>
        );
    }else{
        return(
            <Box sx={{ paddingLeft: {sm: 6, xs: 3, xxs: 2}, paddingRight: {sm: 3, xs: 3, xxs: 2}, paddingBottom: 3 }}>          
                <Stack spacing={5} sx={{ paddingTop: 3 }}>     
                    <Typography fontSize={26} fontWeight={600}>Κατάστημα</Typography>               
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