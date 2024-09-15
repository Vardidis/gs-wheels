import React from "react";
import { Typography, Box, Stack, Paper } from "@mui/material";

const FuncCard = (props) => {
    return(
        <Stack spacing={3} direction='row' sx={{ alignItems: 'center' }}>
            <Box>
                {props.icon} 
            </Box>                        
            <Typography sx={{
                fontSize: {xl: 22, lg: 18, md: 18, sm: 18, xs: 18, xxs: 16},
                color: 'white'
            }} gutterBottom>
                {props.text}
            </Typography>       
        </Stack>               
    );
}

export default FuncCard;