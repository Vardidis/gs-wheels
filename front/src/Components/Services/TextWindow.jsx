import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const TextWindow = (props) => {
    return(
        <Stack spacing={2}>
            <Typography variant='h7' sx={{ fontWeight: 'bold', color: 'rgb(40, 40, 40)' }}>
                {props.title}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: 'rgb(255, 252, 252)', padding: 3, borderRadius: 2, border: '1px solid rgb(180, 180, 180)' }}>
                <Typography sx={{ color: 'rgb(40, 40, 40)' }}>
                    {props.text}
                </Typography>          
            </Box>
        </Stack>
    );
}

export default TextWindow;