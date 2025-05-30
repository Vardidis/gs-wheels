import React, { useContext } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Context } from '../Context';

const Media = () => {
    const {allImages} = useContext(Context);

    return (
        <Stack
            spacing={2}            
        >
            <Typography
                fontSize={24}
                textAlign={'center'}
            >
                Πολυμέσα
            </Typography>
            <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
                justifyContent={'end'}
            >
                <Typography
                    fontSize={14}
                    fontWeight={'bold'}
                >
                    Συνολικά
                </Typography>
                <Typography>
                    {allImages.length}
                </Typography>
            </Stack>
            <Grid container 
                columnSpacing={1}                                                                          
            >
                {allImages.map((image, index) => {             
                    if(index < 6){
                        return(
                            <Grid item
                                size={4}
                                justifyContent={'center'}                                
                            >
                                <img
                                    src={image.url}
                                    style={{                                   
                                        width: '100%',
                                        border: '1px solid #eeeeee',
                                        borderRadius: 6
                                    }}
                                />
                            </Grid>
                        );
                    }
                })}
            </Grid>
        </Stack>
    );
};

export default Media;