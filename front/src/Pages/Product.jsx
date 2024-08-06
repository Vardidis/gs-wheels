import { Box, Typography, Stack } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Components/Context";
import gg from '../assets/full-custom.jpg';
import ProductImageView from "../Components/ProductImageView";
import ProductViewDetails from "../Components/ProductViewDetails";

const Product = () => {
    const {productId} = useParams();
    const {allProducts, isDesktop} = useContext(Context);
    const productItem = allProducts.filter((product) => product.id === Number(productId))[0];

    const style = isDesktop ? {
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: 3,
        paddingTop: 3,
    }
    : {
        padding: 2
    }

    const orient = isDesktop ? 'row' : 'column';

    if(productItem){
        return(
            <Box sx={style}>
                <Stack spacing={{xl: 6, lg: 6, md: 6, sm: 4, xs: 4, xxs: 2}}>
                    <Typography fontSize={{xl: 26, lg: 26, md: 24, sm: 24, xs: 18, xxs: 14}} fontWeight={600}>
                        {productItem.title} Black - Fully Adjustable
                    </Typography>
                    <Stack direction={orient} spacing={{xl: 12, lg: 12, md: 6, sm: 4, xs: 4, xxs: 1}}>
                        <ProductImageView mainImg={productItem.thumbnail} subImages={productItem.sub}/>
                        <ProductViewDetails chars={productItem.chars}/>
                    </Stack>
                    <Box sx={{ padding: 2, bgcolor: '#f1f1f1', borderRadius: 2 }}>
                        <Stack spacing={{xl: 3, lg: 3, md: 3, sm: 2, xs: 2, xxs: 1}} sx={{ maxWidth: {xl: 960, lg: 900, md: 730, sm: 920, xs: 880, xxs: 850} }}>
                            <Typography fontSize={{xl: 20, lg: 20, md: 20, sm: 18, xs: 18, xxs: 16}} fontWeight={600} sx={{ textAlign: 'center' }}>
                                Περιγραφή
                            </Typography>
                            <Typography fontSize={{xl: 16, lg: 16, md: 14, sm: 14, xs: 14, xxs: 14}}>
                                {productItem.desc}
                            </Typography>
                        </Stack>                
                    </Box>
                </Stack>            
            </Box>
        );
    }
}

export default Product;