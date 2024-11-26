import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";
import { useState } from "react";
import { useEffect } from "react";

const LifeCoaching = () => {
    const {allTexts} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{               
        if(allTexts.length > 0){
            setLoading(false);
        }
    }, [allTexts])

    if(loading){
        return(
            <>Loading...</>
        )
    }

    return(
        <Box sx={{
            height: '100vh',      
            padding: {lg: 5, md: 5, sm: 3, xs: 1, xxs: 1}, 
            display: 'flex',
            justifyContent: 'center'
        }}>            
            <Stack spacing={10} alignItems='center' sx={{ maxWidth: 1400 }}>  
                <Typography variant='h5' fontWeight={600}>
                    Συμβουλευτική
                </Typography>         
                <Box sx={{bgcolor: '#30343f', color: 'white', padding: 5, borderRadius: 2, boxShadow: 4, border: '1px solid rgb(180, 180, 180)' }}>
                    <Typography>
                        {allTexts[7].placeText}
                    </Typography>          
                </Box>
                <Grid container rowSpacing={2} columnSpacing={2} justifyContent='center' sx={{ maxWidth: 1400 }}>
                    <Grid item xxs={12} md={6}>
                        <Box sx={{bgcolor: '#30343f', color: 'white', padding: 5, borderRadius: 2, boxShadow: 4, border: '1px solid rgb(180, 180, 180)' }}>
                            <Typography>
                                {allTexts[7].items[0].text}
                            </Typography>          
                        </Box>
                    </Grid>
                    <Grid item xxs={12} md={6}>
                        <Box sx={{bgcolor: '#30343f', color: 'white', padding: 5, borderRadius: 2, boxShadow: 4, border: '1px solid rgb(180, 180, 180)' }}>
                            <Typography>
                                {allTexts[7].items[1].text}
                            </Typography>          
                        </Box> 
                    </Grid>
                    <Grid item xxs={12} md={6}>
                        <Box sx={{bgcolor: '#30343f', color: 'white', padding: 5, borderRadius: 2, boxShadow: 4, border: '1px solid rgb(180, 180, 180)' }}>
                            <Typography>
                                {allTexts[7].items[2].text}
                            </Typography>          
                        </Box>
                    </Grid>
                    <Grid item xxs={12} md={6}>
                        <Box sx={{bgcolor: '#30343f', color: 'white', padding: 5, borderRadius: 2, boxShadow: 4, border: '1px solid rgb(180, 180, 180)' }}>
                            <Typography>
                                {allTexts[7].items[3].text}
                            </Typography>          
                        </Box>   
                    </Grid>
                </Grid>                                                                              
            </Stack>   
        </Box>
    );
}

export default LifeCoaching;