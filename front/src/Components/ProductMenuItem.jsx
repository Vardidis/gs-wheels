import { Box, Typography } from "@mui/material";
import React from "react";

const ProductMenuItem = (props) => {
    return(
        <Box sx={{
            id: props.id,
            borderRadius: 1,
            minWidth: {lg: 130, md: 130, sm: 130, xs: 100, xxs: 100},
            backgroundColor: props.highlight ? '#FFDCBC' : 'rgb(234, 234, 234)',
            display: 'flex',
            alignItems: 'center',
            padding: 1,
            gap: 1,
            cursor: 'pointer',
            color: 'black'
        }}
        className={props.highlight?'product-menu-selected':'product-menu'}>
            {props.icon}
            <Typography fontSize={{xl: 16, lg: 16, md: 16, sm: 14, xs: 12, xxs: 12}}>
                {props.text}
            </Typography>                   
        </Box>
    );
}

export default ProductMenuItem;