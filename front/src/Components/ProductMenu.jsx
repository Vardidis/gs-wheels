import React from "react";
import ProductItem from "./ProductItem";
import { Box, Grid } from "@mui/material";

const ProductMenu = (props) => {
    return(
        <Grid container className='no-scrollbar' sx={{ gap: 2, overflowY: 'scroll', maxHeight: {xl: '100%', lg: 650, md: 580, sm: 800, xs: 600, xxs: 600}, justifyContent: 'center', padding: 2 }}>
            {props.items.map((item, index) => {                                
                return(
                    <Grid sx={{ maxWidth: 500, height: 'fit-content', marginBottom: 3 }}>                    
                        <ProductItem item={item} index={index} key={index}/>                
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ProductMenu;