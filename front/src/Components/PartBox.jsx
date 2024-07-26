import React from "react";
import { Typography, Box } from "@mui/material";

const PartBox = (props) => {
    return(
        <Box sx={{
            backgroundColor: 'black',
            borderRadius: 2,
            height: `${props.height}`,
            width: {lg: 300, md: 300, sm: 225},
            border: '1px solid orangered',
            cursor: 'pointer',
            boxShadow: '2px 3px 3px -2px black'
        }}>
            <img src={props.image} className='partbox-img' style={{ height: `${props.height}` }}/>
            <Typography fontSize={props.font} fontWeight={600} sx={{ color: 'white', position: 'relative', transform: 'translate(-50%, -50%)', left: '50%', top: '-55%', padding: 1 }}>
                {props.text}
            </Typography>
        </Box>
    );
}

export default PartBox;