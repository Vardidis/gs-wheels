import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ProductItem = (props) => {
    return(
        <Link to={`/product/${props.index}`} style={{ textDecoration: 'none' }}>
            <Box>
                <img src={props.item.thumbnail} alt=''/>
                <Box sx={{ padding: 0.5 }}>
                    <Typography fontWeight={600} sx={{ color: 'black' }}>
                        {props.item.title}
                    </Typography>
                </Box>
            </Box>       
        </Link> 
    );
}

export default ProductItem;