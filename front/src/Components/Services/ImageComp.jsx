import React, { useContext } from "react";
import { Context } from "../Context";
import { Box } from "@mui/material";

const ImageComp = (props) => {
    const {isDesktop} = useContext(Context);
    
    return(
        <Box>
            {isDesktop
                ? <img src={props.image} alt='' style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
                : <img src={props.image} alt='' style={{ width: '100%', height: '160px', objectFit: 'cover' }}/>
            }
        </Box>
    );
}

export default ImageComp;