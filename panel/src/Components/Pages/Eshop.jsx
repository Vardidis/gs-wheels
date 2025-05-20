import React, { useContext } from "react";
import { Box, Stack, Typography, Button, Grid } from '@mui/material';
import ProductsTable from "../ProductsTable";
import { Context } from "../Context";
import { Link } from 'react-router-dom';
import EshopMenu from "../EshopMenu";

const Eshop = () => {    
    const {allProducts, endpoint} = useContext(Context);
    const count = allProducts.length;

    if(allProducts.length > 0){
        return(
            <Stack               
            >
                <Grid container
                    columnSpacing={1}                                     
                >
                    <Grid item
                        lg={9}
                    >                                     
                        <ProductsTable products={allProducts} endpoint={endpoint}/>                                                   
                    </Grid>
                    <Grid item
                        lg={3}                        
                    >
                        <EshopMenu/>
                    </Grid>
                </Grid>
            </Stack>
        );
    }
}

export default Eshop;