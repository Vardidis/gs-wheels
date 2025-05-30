import React, { useContext } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Context } from '../Context';

const Products = () => {
    const {allProducts} = useContext(Context);

    return (
        <Stack
            spacing={2}
        >
            <Typography
                fontSize={24}
                textAlign={'center'}
            >
                Προϊόντα
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
                    {allProducts.length}
                </Typography>
            </Stack>
            <Grid container 
                columnSpacing={1}              
                rowSpacing={0}                
            >
                {allProducts.map((product, index) => {
                    if(index < 6)
                    return(
                        <Grid item
                            size={4}
                        >
                            <img
                                src={product.thumbnail}
                                style={{                                   
                                    width: '100%',
                                    border: '1px solid #eeeeee',
                                    borderRadius: 6
                                }}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Stack>
    );
};

export default Products;