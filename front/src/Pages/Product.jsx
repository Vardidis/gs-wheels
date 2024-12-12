import { Box, Typography, Stack, Paper } from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Components/Context";
import ProductImageView from "../Components/ProductImageView";
import ProductViewDetails from "../Components/ProductViewDetails";

const DetailsBox = (props) => {
    return(
        <Paper sx={{ padding: 3, bgcolor: '#30343f', color: 'white', borderRadius: 2, maxWidth: 1050}}>
            <Stack spacing={3} alignItems='center'>
                <Typography variant='h6' sx={{ textAlign: 'center' }}>
                    Περιγραφή
                </Typography>
                <Typography fontSize={15}>
                    {props.desc}
                </Typography>
            </Stack>                
        </Paper>        
    );
}

const Product = () => {
    const {productId} = useParams();
    const {allProducts, isDesktop} = useContext(Context);
    const productItem = allProducts.filter((prod) => {return prod._id === String(productId)})[0] || null;

    if(productItem){
        return(
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'  ,                                                     
                }}>                               
                <Stack                  
                    alignItems={'stretch'}
                    spacing={2}        
                    sx={{
                        width: '100%'
                    }}                                                  
                >
                    <ProductImageView mainImg={productItem.thumbnail} title={productItem.title} subImages={productItem.sub}/>     
                    <Stack
                        spacing={4}
                        alignItems={'center'}
                        sx={{
                            padding: 1
                        }}
                    >
                        <DetailsBox
                            desc={productItem.desc}
                        />    
                        <ProductViewDetails chars={productItem.chars}/>
                    </Stack>                                                                                      
                </Stack>                                     
            </Box>
        );
    }
}

export default Product;