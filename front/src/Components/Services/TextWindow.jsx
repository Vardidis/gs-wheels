import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const TextWindow = (props) => {
    return(
        <Box sx={{ padding: 5, borderRadius: 2, bgcolor: '#30343f', color: 'white', boxShadow: 12 }}>
            <Stack spacing={3}>
                <Typography fontWeight={600} fontSize={17}>
                    {props.title}
                </Typography>
                <Typography fontSize={16}>
                    {props.text}
                </Typography>
            </Stack>                                
        </Box>                               
    );
}

export default TextWindow;