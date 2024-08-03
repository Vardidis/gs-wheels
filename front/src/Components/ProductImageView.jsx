import React, { useContext, useState } from "react";
import ImageZoom from 'react-image-zooom';
import { Box, Stack } from "@mui/material";
import { Context } from "./Context";

const ProductImageView = (props) => {
    const [bigImage, setBigImage] = useState(props.mainImg);
    const {isDesktop} = useContext(Context);

    const switchImage = (img_src) => {
        if(img_src){
            setBigImage(img_src);
        }
    }

    return(
        <Stack spacing={2}>
            <Box>
                <ImageZoom className='zoom-image' src={bigImage}  alt="" zoom="600"/>
            </Box>                            
            <Stack direction='row' spacing={1}>
                <Box onClick={()=>switchImage(props.subImg)}>
                    <img src={props.subImg} className='sub-image'/>
                </Box>
                <Box onClick={()=>switchImage(props.mainImg)}>
                    <img src={props.mainImg} className='sub-image'/>
                </Box>
                <Box onClick={()=>switchImage(props.mainImg)}>
                    <img src={props.mainImg} className='sub-image'/>
                </Box>                                                
            </Stack>
        </Stack>
    );
}

export default ProductImageView;