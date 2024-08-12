import React from "react";
import { Typography, Box, Stack, Paper } from "@mui/material";

const FuncCard = (props) => {
    return(
        <Box sx={{
            paddingLeft: {xl: 20, lg: 30, md: 20, sm: 5, xs: 3, xxs: 2},
            paddingRight: {xl: 20, lg: 30, md: 20, sm: 5, xs: 3, xxs: 2}
        }}>
                <Paper sx={{ borderRadius: 3, backgroundColor: 'rgb(60, 60, 60)', textAlign: 'center', padding: {xl: 3, lg: 3, md: 3, sm: 2, xs: 2, xxs: 2}, border: '1px solid orangered' }}>
                    <Stack spacing={3}>
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
                </Paper>
        </Box>
    );
}

export default FuncCard;