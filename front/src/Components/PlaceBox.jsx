import { Box, Typography } from "@mui/material";
import React from "react";

const PlaceBox = (props) => {
    return(
        <Box sx={{
            height: 20,
            width: {xl: 200, lg: 185, md: 185, sm: 185, xs: 130, xxs: 110},
            backgroundColor: '#ECECEC',
            display: 'flex',
            gap: {xl: 1, lg: 1, md: 1, sm: 1, xs: 1, xxs: 0.5},
            padding: {xl: 1.5, lg: 1.5, md: 1.5, sm: 1.5, xs: 1.5, xxs: 1},
            fontWeight: 600,
            borderRadius: 1,
            alignItems: 'center',
            boxShadow: '2px 2px 3px -2px black'
        }}>
            {props.icon}
            <Typography fontSize={{xl: 18, lg: 18, md: 18, sm: 20, xs: 16, xxs: 14}}>
                {props.text}
            </Typography>            
        </Box>
    );
}

export default PlaceBox;