import React, { useContext } from "react";
import ProductItem from "./ProductItem";
import { Grid } from "@mui/material";
import { Context } from "./Context";

const ProductMenu = (props) => {
    const {fullHeight} = useContext(Context);

    return(
        <Grid container className='no-scrollbar' sx={{ gap: 2, overflowY: 'scroll', maxHeight: fullHeight, padding: 5, paddingBottom: 20, justifyContent: 'center' }}>
            {props.items.map((item, index) => {                                
                return(
                    <Grid sx={{ maxWidth: 350, height: 'fit-content', marginBottom: 3 }}>                            
                        <ProductItem item={item} index={item.id} key={index}/>                             
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default ProductMenu;