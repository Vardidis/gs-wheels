import React, { useContext } from "react";
import { Stack, Box } from "@mui/material";
import { Context } from "../Components/Context";
import CategoryMenu from "../Components/CategoryMenu";
import ProductTopRow from '../Components/ProductTopRow';
import ProductMenu from '../Components/ProductMenu';

const Products = () => {
    const {isDesktop} = useContext(Context);

    return(      
        <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 3 }}>          
            <Stack spacing={3} sx={{ width: {lg: 715, md: 700, sm: 625, xs: 600, xxs: 500}, paddingTop: 3, paddingRight: {lg: 20, md: 0, sm: 0, xs: 0, xxs: 0} }}>     
                <ProductTopRow/>
                {isDesktop &&
                    <Stack direction='row' spacing={{lg: 6, md: 4}}>
                        <CategoryMenu/>
                        <ProductMenu/>                                             
                    </Stack> 
                }  
                {!isDesktop &&
                    <Stack spacing={4} sx={{ width: {sm: 625, xs: 600} }}>
                        <CategoryMenu/>
                        <ProductMenu/>
                    </Stack>    
                }         
            </Stack>
        </Box>      
    );
}

export default Products;