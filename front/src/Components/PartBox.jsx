import React from "react";
import { Typography, Box } from "@mui/material";

const PartBox = (props) => {
    return(
        <Box sx={{
            backgroundColor: 'black',
            borderRadius: 2,
            height: `${props.height}`,
            width: {xl: 350, lg: 315, md: 300, sm: 300, xs: 300, xxs: 235},
            border: '1px solid orangered',
            cursor: 'pointer',
            boxShadow: '2px 3px 3px -2px black',
            overflow: 'hidden'
        }}>
            <img src={props.image} className='partbox-img' alt='' style={{ height: `${props.height}`, width: '100%' }}/>
            <Typography fontSize={{xl: 14, lg: 14, md: 14, sm: 15, xs: 14, xxs: 13}} fontWeight={600} sx={{ color: 'white', position: 'relative', transform: 'translate(-50%, -50%)', left: '50%', top: '-55%', padding: 1, paddingLeft: 3, paddingRight: 3 }}>
                {props.text}
            </Typography>
        </Box>
    );
}

export default PartBox;