import { Box, Typography } from "@mui/material";
import React from "react";

const ProductMenuItem = (props) => {
    return(
        <Box sx={{
            id: props.id,
            borderRadius: 90,
            minWidth: {lg: 130, md: 130, sm: 130, xs: 100, xxs: 100},
            height: 30,
            backgroundColor: props.highlight ? '#30343f' : 'transparent',
            border: '1px solid #30343f',
            display: 'flex',
            alignItems: 'center', 
            justifyContent: 'center',       
            gap: 1,
            cursor: 'pointer',
            color: props.highlight ? 'white' : '#30343f',       
            padding: 1,       
            boxShadow: 2,       
        }}
        >
            {props.icon}
            <Typography fontSize={{xl: 16, lg: 15, md: 15, sm: 14, xs: 13, xxs: 12}} fontWeight={600}>
                {props.text}
            </Typography>                   
        </Box>
    );
}

export default ProductMenuItem;