import React from "react";
import ProductItem from "./ProductItem";
import { Grid } from "@mui/material";

const ProductMenu = (props) => {
    return(
        <Grid container columnGap={2} rowGap={2} justifyContent={'center'} sx={{ padding: '32px 0px' }}>
            {props.items.map((item, index) => {                                
                return(
                    <Grid item key={item._id} xs={12} sm={2.5} sx={{ marginBottom: 3 }}>                            
                        <ProductItem item={item} index={item._id} key={index}/>                             
                    </Grid>
                );
            })}
        </Grid>       
    )
}

export default ProductMenu;