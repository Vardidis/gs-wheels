import React from "react";
import Grid from '@mui/material/Grid';
import bg1 from '../assets/giotis-wheelie.jpg';
import { Stack } from "@mui/material";

const Products = () => {
    return(
        <Grid container rowSpacing={2} columnSpacing={1} sx={{ width: '100%', padding: 3, justifyContent: 'center' }}>
            <Grid xs={2}>
                <Stack spacing={1}>
                    <div style={{ height: '20px', width: '150px' }}></div> 
                    <div style={{ border: '1px solid black', height: '20px', width: '150px' }}></div> 
                    <div style={{ border: '1px solid black', height: '20px', width: '150px' }}></div> 
                    <div style={{ border: '1px solid black', height: '20px', width: '150px' }}></div> 
                    <div style={{ border: '1px solid black', height: '20px', width: '150px' }}></div> 
                </Stack>                
            </Grid>
            <Grid xs={8} rowSpacing={5}>
                <Stack direction='row' spacing={2}>
                    <div style={{ border: '1px solid black', height: '20px', width: '150px' }}></div> 
                    <div style={{ border: '1px solid black', height: '20px', width: '150px' }}></div> 
                    <div style={{ border: '1px solid black', height: '20px', width: '150px' }}></div> 
                </Stack>                
                <Stack direction='row' spacing={2}>
                    <img src={bg1} style={{ height: '250px', width: '250px' }}/> 
                    <img src={bg1} style={{ height: '250px', width: '250px' }}/> 
                </Stack>
                
            </Grid>
        </Grid>
    );
}

export default Products;