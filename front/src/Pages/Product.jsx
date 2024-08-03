import { Box, Typography, Stack } from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Components/Context";
import ImageZoom from 'react-image-zooom';

const Product = () => {
    const {productId} = useParams();
    const {allProducts, isDesktop} = useContext(Context);
    const productItem = allProducts.filter((product) => product.id === Number(productId))[0];
    
    if(isDesktop){
        console.log(productItem)
        return(
            <Box sx={{ display: 'flex', justifyContent: 'center', paddingBottom: 5, paddingTop: 3}}>
                <Stack spacing={6}>
                    <Typography fontSize={26} fontWeight={600}>
                        {productItem.title} Black - Fully Adjustable
                    </Typography>
                    <Stack direction='row' spacing={18}>
                        <Stack spacing={2}>
                            <Box className='zoom-image'>
                                <ImageZoom src={productItem.thumbnail}  alt="" zoom="300"/>
                            </Box>                            
                            <Stack direction='row' spacing={1}>
                                <img src={productItem.thumbnail} style={{ width: '130px', boxShadow: '1px 2px 3px -2px black', borderRadius: 5 }}/>
                                <img src={productItem.thumbnail} style={{ width: '130px', boxShadow: '1px 2px 3px -2px black', borderRadius: 5 }}/>
                                <img src={productItem.thumbnail} style={{ width: '130px', boxShadow: '1px 2px 3px -2px black', borderRadius: 5 }}/>
                            </Stack>
                        </Stack>
                        <Box sx={{ padding: 5, bgcolor: 'rgb(247, 247, 247)', borderRadius: 2, boxShadow: '1px 2px 3px -2px black' }}>
                            <Stack spacing={3}>
                                <Typography fontSize={20} fontWeight={600} sx={{ textAlign: 'center' }}>
                                    Λεπτομέρειες
                                </Typography>
                                <Stack spacing={1}>
                                    {productItem.chars.map(char => {
                                        return(
                                            <Typography fontSize={16}>
                                                {char}
                                            </Typography>
                                        );
                                    })}                                                                      
                                </Stack>                        
                            </Stack>
                        </Box>                                        
                    </Stack>
                    <Box sx={{ padding: 2, bgcolor: 'rgb(245, 245, 245)', borderRadius: 2 }}>
                        <Stack spacing={3} sx={{ maxWidth: 920 }}>
                            <Typography fontSize={20} fontWeight={600} sx={{ textAlign: 'center' }}>
                                Περιγραφή
                            </Typography>
                            <Typography fontSize={16}>
                               {productItem.desc}
                            </Typography>
                        </Stack>                
                    </Box>
                </Stack>            
            </Box>
        );
    }else{
        return(
            <Box sx={{ padding: 3 }}>
                <Stack spacing={4}>
                    <Typography fontSize={24} fontWeight={600}>
                        {productItem.title} Black - Fully Adjustable
                    </Typography>
                    <Stack spacing={4}>
                        <Stack direction='row' spacing={2}>
                            <img src={productItem.thumbnail} style={{ width: '500px', boxShadow: '1px 2px 3px -2px black', borderRadius: 5 }}/>
                            <Stack spacing={1}>
                                <img src={productItem.thumbnail} style={{ width: '110px', boxShadow: '1px 2px 3px -2px black', borderRadius: 5 }}/>
                                <img src={productItem.thumbnail} style={{ width: '110px', boxShadow: '1px 2px 3px -2px black', borderRadius: 5 }}/>
                                <img src={productItem.thumbnail} style={{ width: '110px', boxShadow: '1px 2px 3px -2px black', borderRadius: 5 }}/>
                                <img src={productItem.thumbnail} style={{ width: '110px', boxShadow: '1px 2px 3px -2px black', borderRadius: 5 }}/>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Box sx={{ padding: 2, bgcolor: 'rgb(247, 247, 247)', borderRadius: 2, boxShadow: '1px 2px 3px -2px black' }}>
                            <Stack spacing={2}>
                                <Typography fontSize={18} fontWeight={600} sx={{ textAlign: 'center' }}>
                                    Λεπτομέρειες
                                </Typography>
                                <Stack spacing={0}>
                                    {productItem.chars.map(char => {
                                        return(
                                            <Typography fontSize={16}>
                                                {char}
                                            </Typography>
                                        );
                                    })}        
                                </Stack>                        
                            </Stack>
                        </Box>   
                        <Box sx={{ padding: 2, bgcolor: 'rgb(245, 245, 245)', borderRadius: 2, boxShadow: '1px 2px 3px -2px black' }}>
                            <Stack spacing={2} sx={{ maxWidth: 920 }}>
                                <Typography fontSize={18} fontWeight={600} sx={{ textAlign: 'center' }}>
                                    Περιγραφή
                                </Typography>
                                <Typography fontSize={14}>
                                    {productItem.desc}
                                </Typography>
                            </Stack>                
                    </Box>                              
                </Stack>
            </Box>
        );
    }
}

export default Product;