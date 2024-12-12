import React, { useState } from "react";
import ImageZoom from 'react-image-zooom';
import { Box, Grid, Stack, Typography } from "@mui/material";

const ProductImageView = (props) => {
    const [bigImage, setBigImage] = useState(props.mainImg);
    
    const switchImage = (img_src) => {
        if(img_src){
            setBigImage(img_src);
        }
    }

    return(        
        <Grid container
            columnGap={1}
            rowGap={1}
            alignItems={'center'}                
        >
            <Grid item xxs={12} xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box
                    sx={{
                        bgcolor: 'white',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',    
                        boxShadow: 2                                                
                    }}
                >
                    <ImageZoom className='zoom-image' src={bigImage}  alt="" zoom="600"/>
                </Box>               
            </Grid>              
            <Grid item xl={6} lg={6} md={12} sm={12} xs={12} xxs={12}>
                <Stack direction='row' spacing={2} sx={{padding: 1, width: '100%', minWidth: 275, overflowX: 'auto'}}>
                    <Box className='sub-list' sx={{ display: 'flex', gap: 1, overflowX: 'auto', }}>
                        <Box onClick={()=>switchImage(props.mainImg)}>
                            <img src={props.mainImg} className='sub-image'/>
                        </Box>
                        {props.subImages.map((image, index) => {
                            return(
                                <Box onClick={()=>switchImage(image)} key={index}>
                                    <img src={image} className='sub-image'/>
                                </Box>
                            )
                        })}                                                                                  
                    </Box>    
                </Stack>       
            </Grid>                                         
            <Grid item             
                xl={5} lg={5} md={12} sm={12} xs={12} xxs={12}
            >
                <Typography fontSize={22} textAlign={'center'} fontWeight={600} sx={{padding: 1, width: '100%'}}>
                    {props.title}
                </Typography>         
            </Grid>                
        </Grid>                  
    );
}

export default ProductImageView;