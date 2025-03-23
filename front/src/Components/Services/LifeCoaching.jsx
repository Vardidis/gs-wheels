import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { Context } from "../Context";
import { useState } from "react";
import { useEffect } from "react";
import Header from '../../assets/HEADER-AboutUs_UP.jpg';
import Background from '../../assets/BACKGROUND-Arxiki.jpg';

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
        <Box
            sx={{
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',                
            }}
        >        
            <img
                src={Header}
                style={{
                    width: '100%'
                }}
            />    
            <Stack
                spacing={3}
                alignItems={'center'}
                sx={{
                    maxWidth: 1400,
                    padding: '24px 24px'
                }}
            >  
                <Typography variant='h5' fontWeight={600}>
                    Συμβουλευτική
                </Typography>                         
                <Typography
                    sx={{
                        color: '#30343f'
                    }}
                >
                    {allTexts[7].placeText}
                </Typography>                         
                <Grid container
                    rowGap={6}
                    columnSpacing={2}
                    justifyContent='center'
                    sx={{
                        maxWidth: 1400
                    }}
                >
                    <Grid item xxs={12} md={6}>
                        <Typography
                            sx={{
                                color: '#30343f'
                            }}
                        >
                            {allTexts[7].items[0].text}
                        </Typography>                                 
                    </Grid>
                    <Grid item xxs={12} md={6}>
                        <Typography
                            sx={{
                                color: '#30343f'
                            }}
                        >
                            {allTexts[7].items[1].text}
                        </Typography>                                 
                    </Grid>
                    <Grid item xxs={12} md={6}>
                        <Typography
                            sx={{
                                color: '#30343f'
                            }}
                        >
                            {allTexts[7].items[2].text}
                        </Typography>                                  
                    </Grid>
                    <Grid item xxs={12} md={6}>
                        <Typography
                            sx={{
                                color: '#30343f'
                            }}
                        >
                            {allTexts[7].items[3].text}
                        </Typography>                          
                    </Grid>
                </Grid>                                                                              
            </Stack>   
        </Box>
    );
}

export default LifeCoaching;