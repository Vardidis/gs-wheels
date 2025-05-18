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
            columnSpacing={1}
            rowGap={1}
            alignItems={'center'}                
        >
            <Grid item 
                size={12}
            >           
                <Box
                    sx={{
                        background: 'linear-gradient(180deg,rgba(255, 255, 255, 1) 0%, rgb(247, 235, 228) 50%, rgba(255, 255, 255, 1) 100%)',
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        maxHeight: 300
                    }}
                >
                    <ImageZoom className='zoom-image' src={bigImage}  alt="" zoom="600"/>
                </Box>               
            </Grid> 
            <Grid item   
                size={12}
            >                          
                <Typography fontSize={28} textAlign={'center'} fontWeight={600} sx={{padding: 1, width: '100%', color: '#D85704'}}>
                    {props.title}
                </Typography>         
            </Grid>                       
            <Grid item
                size={12}
            >           
                <Stack direction='row' spacing={2} sx={{padding: 1, width: '100%', minWidth: 275, overflowX: 'auto'}}>
                    <Box className='sub-list' sx={{ display: 'flex', gap: 1, width: '100%' }}>
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
        </Grid>                  
    );
}

export default ProductImageView;