import React from "react";
import { Typography, Box } from "@mui/material";

const PartBox = (props) => {
    return(
        <Box sx={{
            backgroundColor: 'black',
            borderRadius: 2,
            height: `${props.height}`,
            width: {xl: 350, lg: 300, md: 300, sm: 300},
            border: '1px solid orangered',
            cursor: 'pointer',
            boxShadow: '2px 3px 3px -2px black',
            overflow: 'hidden'
        }}>
            <img src={props.image} className='partbox-img' alt='' style={{ height: `${props.height}`, width: 'inherit' }}/>
            <Typography fontSize={props.font} fontWeight={600} sx={{ color: 'white', position: 'relative', transform: 'translate(-50%, -50%)', left: '50%', top: '-55%', padding: 1, paddingLeft: 3, paddingRight: 3 }}>
                {props.text}
            </Typography>
        </Box>
    );
}

export default PartBox;