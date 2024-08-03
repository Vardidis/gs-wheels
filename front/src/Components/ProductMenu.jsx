import React, { useContext } from "react";
import { Context } from "./Context";
import ProductItem from "./ProductItem";
import { Box } from "@mui/material";

const ProductMenu = (props) => {
    return(
        <Box className="product-items">
            {props.items.map((item, index) => {                
                return <ProductItem item={item} index={index}/>
            })}
        </Box>
    )
}

export default ProductMenu;