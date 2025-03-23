import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const TextWindow = (props) => {
    return(        
        <Stack
            spacing={2}
        >
            <Typography
                fontWeight={600}
                fontSize={20}
                sx={{
                    color: '#d85704'
                }}
            >
                {props.title}
            </Typography>
            <Typography
                fontSize={16}
                sx={{
                    color: '#30343f'
                }}
            >
                {props.text}
            </Typography>
        </Stack>                            
    );
}

export default TextWindow;