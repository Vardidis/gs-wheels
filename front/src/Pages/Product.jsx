import { Box, Typography, Stack, Grid } from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Components/Context";
import ProductImageView from "../Components/ProductImageView";
import ProductViewDetails from "../Components/ProductViewDetails";

const DetailsBox = (props) => {
    return(
        <Box sx={{ padding: 3, bgcolor: 'white', color: '#30343f', borderRadius: 6, maxWidth: 1050}}>
            <Stack spacing={3} alignItems='center'>
                <Typography variant='h6' sx={{ textAlign: 'center' }}>
                    Περιγραφή
                </Typography>
                <Typography fontSize={15}>
                    {props.desc}
                </Typography>
            </Stack>                
        </Box>        
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
                    paddingBottom: 6,
                    bgcolor: '#eeeeee'                                  
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
                        columnSpacing={2}
                        rowGap={2}
                        justifyContent={'center'}    
                        sx={{
                            padding: '0px 16px'
                        }}                 
                    >
                        <Grid item 
                            size={{
                                xxs: 12,
                                lg: 6
                            }}>
                            <DetailsBox
                                desc={productItem.desc}
                            />  
                        </Grid>
                        <Grid item
                            size={{
                                xxs: 12,
                                lg: 6
                            }}>
                            <ProductViewDetails chars={productItem.chars}/>
                        </Grid>                        
                    </Grid>                                                                                      
                </Stack>                                     
            </Box>
        );
    }
}

export default Product;