import React from "react";
import { Typography, Box, Stack } from "@mui/material";

const FuncCard = (props) => {
    return(
        <Box sx={{
            paddingLeft: {xl: 0, lg: 0, md: 0, sm: 1, xs: 1, xxs: 1},
            paddingRight: {xl: 0, lg: 0, md: 0, sm: 1, xs: 1, xxs: 1}
        }}>
            <Stack direction='row' spacing={1}>
                <Box sx={{
                    boxShadow: '1px 2px 3px -2px black', 
                    backgroundColor: 'black',
                    opacity: 0.8,
                    width: {xl: 60, lg: 60, md: 60, sm: 45, xs: 45, xxs: 45},
                    height: {xl: 60, lg: 60, md: 60, sm: 45, xs: 45, xxs: 45},
                    borderRadius: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '2px solid orangered'
                }}>
                    {props.icon} 
                </Box>
                <Box sx={{ maxWidth: {xl: 1000, lg: 800, md: 550, sm: 400, xs: 220, xxs: 150, borderRadius: 10}, boxShadow: '1px 2px 3px -2px black', backgroundColor: 'rgb(60, 60, 60)', textAlign: 'center', padding: 3, border: '1px solid orangered' }}>
                    <Typography sx={{
                        fontSize: {xl: 22, lg: 18, md: 18, sm: 18, xs: 16, xxs: 12},
                        color: 'white'
                    }} gutterBottom>
                        {props.text}
                    </Typography>                
                </Box>
            </Stack>
        </Box>
    );
}

export default FuncCard;