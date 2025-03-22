import { Box, Typography } from "@mui/material";
import React from "react";

const ProductMenuItem = (props) => {
    return(
        <Box sx={{
            borderRadius: 2,
            height: 32,
            backgroundColor: props.highlight ? '#d46926' : '#9a9a9a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 1,
            margin: '0px 8px',
            marginTop: '24px',
            color: 'white'
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