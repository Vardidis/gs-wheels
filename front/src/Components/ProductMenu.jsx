import React from "react";
import ProductItem from "./ProductItem";
import { Grid } from "@mui/material";

const ProductMenu = (props) => {
    return(
        <Grid container sx={{ gap: 2, padding: 5, paddingBottom: 20, justifyContent: 'center' }}>
            {props.items.map((item, index) => {                                
                return(
                    <Grid item key={item._id} sx={{ maxWidth: 350, height: 'fit-content', marginBottom: 3 }}>                            
                        <ProductItem item={item} index={item._id} key={index}/>                             
                    </Grid>
                )
            })}
        </Grid>       
    )
}

export default ProductMenu;