import React, { useContext, useState } from "react";
import ImageZoom from 'react-image-zooom';
import { Box, Stack } from "@mui/material";
import { Context } from "./Context";

const ProductImageView = (props) => {
    const {endpoint} = useContext(Context);
    const [bigImage, setBigImage] = useState(`${endpoint}/${props.mainImg}`);
    
    const switchImage = (img_src) => {
        if(img_src){
            setBigImage(img_src);
        }
    }

    return(        
        <Stack spacing={{xl: 2, lg: 2, md: 2, sm: 1, xs: 1, xxs: 1}}>
            <Box>
                <ImageZoom className='zoom-image' src={bigImage}  alt="" zoom="600"/>
            </Box>                            
            <Box sx={{ display: 'flex', paddingBottom: 1 }}>
                <Stack direction='row' spacing={2}>
                    <Box className='sub-list' sx={{ display: 'flex', gap: 1, maxWidth: {xl: 500, lg: 500, md: 400, sm: 500, xs: 330, xxs: 240}, overflowX: 'auto', }}>
                        <Box onClick={()=>switchImage(`${endpoint}/${props.mainImg}`)}>
                            <img src={`${endpoint}/${props.mainImg}`} className='sub-image'/>
                        </Box>
                        {props.subImages.map((image, index) => {
                            return(
                                <Box onClick={()=>switchImage(`${endpoint}/${image}`)} key={index}>
                                    <img src={`${endpoint}/${image}`} className='sub-image'/>
                                </Box>
                            )
                        })}                                                                                  
                    </Box>    
                </Stack>
            </Box>          
        </Stack>
    );
}

export default ProductImageView;