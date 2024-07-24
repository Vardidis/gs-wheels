import { Typography } from "@mui/material";
import React from "react";

const PartBox = (props) => {
    return(
        <div style={{
            backgroundColor: 'black',
            borderRadius: 5,
            height: `${props.height}`,
            width: '300px',
            border: '1px solid orangered',
            cursor: 'pointer',
            boxShadow: '2px 3px 3px -2px black'
        }}>
            <img src={props.image} style={{
                opacity: '0.4',
                borderRadius: 5,
                height: `${props.height}`,
                width: '300px',
                objectFit: 'cover'
            }}/>
            <Typography fontSize={props.font} fontWeight={600} sx={{ color: 'white', position: 'relative', transform: 'translate(-50%, -50%)', left: '50%', top: '-55%', padding: 1 }}>
                {props.text}
            </Typography>
        </div>
    );
}

export default PartBox;