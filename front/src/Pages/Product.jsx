import { Box, Typography, Stack, Paper } from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Components/Context";
import ProductImageView from "../Components/ProductImageView";
import ProductViewDetails from "../Components/ProductViewDetails";

const DetailsBox = (props) => {
    return(
        <Paper sx={{ padding: 3, bgcolor: '#30343f', color: 'white', borderRadius: 2}}>
            <Stack spacing={3} alignItems='center' sx={{ maxWidth: 1400 }}>
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
    const productItem = allProducts.filter((product) => product.id === Number(productId))[0];

    const style = isDesktop ? {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 5,
        paddingTop: 3,
        paddingLeft: 2,
        paddingRight: 2
    }
    : {
        padding: 0
    }

    const orient = isDesktop ? 'row' : 'column';

    if(productItem){
        return(
            <Box sx={style}>                               
                <Stack direction={orient} alignItems={isDesktop ? 'top' : 'center'} spacing={{xl: 12, lg: 6, md: 6, sm: 4, xs: 4, xxs: 1}} sx={{padding: 1}}>
                    <ProductImageView mainImg={productItem.thumbnail} subImages={productItem.sub}/>     
                    <Stack spacing={4}>
                    <Typography fontSize={22} fontWeight={600}>
                        {productItem.title}
                    </Typography>
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