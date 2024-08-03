import { Stack, Typography } from "@mui/material";
import React from "react";

const CanvasImage = (props) => {
    return(
        <Stack direction='row' spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={props.image} alt='' style={{
                width: '40px',
                height: '40px',
                borderRadius: 50,
                cursor: 'pointer',
                border: '1px solid black'
            }}
            className='canvas-part'/>
            <Typography>
                {props.text}
            </Typography>
        </Stack>
    );
}

export default CanvasImage;