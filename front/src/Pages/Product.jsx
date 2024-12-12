import { Box, Typography, Stack, Paper, Grid } from "@mui/material";
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
                    justifyContent: 'center',
                    marginBottom: 3                                                     
                }}>                               
                <Stack                  
                    alignItems={'stretch'}
                    spacing={4}        
                    sx={{
                        width: '100%'
                    }}                                                  
                >
                    <ProductImageView mainImg={productItem.thumbnail} title={productItem.title} subImages={productItem.sub}/>     
                    <Grid container
                        columnGap={2}
                        rowGap={2}
                        justifyContent={'center'}    
                        sx={{
                            padding: '0px 16px'
                        }}                 
                    >
                        <Grid item lg={5} md={12} sm={12} xs={12} xxs={12}>
                            <DetailsBox
                                desc={productItem.desc}
                            />  
                        </Grid>
                        <Grid item lg={5} md={12} sm={12} xs={12} xxs={12}>
                            <ProductViewDetails chars={productItem.chars}/>
                        </Grid>                        
                    </Grid>                                                                                      
                </Stack>                                     
            </Box>
        );
    }
}

export default Product;