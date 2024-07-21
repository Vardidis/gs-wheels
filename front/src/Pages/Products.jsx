import React, { useContext } from "react";
import { Stack } from "@mui/material";
import { Context } from "../Components/Context";
import CategoryMenu from "../Components/CategoryMenu";
import ProductTopRow from '../Components/ProductTopRow';
import ProductMenu from '../Components/ProductMenu';

const Products = () => {
    const {isDesktop} = useContext(Context);

    return(              
        <Stack spacing={4} sx={{ paddingLeft: {lg: 20, md: 6, sm: 6, xs: 2, xxs: 1}, paddingRight: {lg: 10, md: 3, sm: 3, xs: 2, xxs: 1}, width: {lg: 715, md: 700}, marginTop: 3 }}>     
            <ProductTopRow/>
            {isDesktop &&
                <Stack direction='row' spacing={{lg: 6, md: 4}}>
                    <CategoryMenu/>
                    <ProductMenu/>                                             
                </Stack> 
            }  
            {!isDesktop &&
                <Stack spacing={4} sx={{ paddingLeft: {sm: 6, xs: 2}, paddingRight: {sm: 3, xs: 2}, width: {sm: 625, xs: 600}, marginTop: 3 }}>
                    <CategoryMenu/>
                    <ProductMenu/>
                </Stack>    
            }         
        </Stack>
    );
}

export default Products;