import { Box, Typography, Stack } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./Context";

const ProductItem = (props) => {
    const {endpoint} = useContext(Context);

    return(
        <Link to={`/product/${props.index}`} style={{ textDecoration: 'none', color: 'black' }}>
            <Box className='product-item-box'>
                <img src={`${endpoint}/${props.item.thumbnail}`} alt=''/>
                <Stack>
                    <Box>
                        <Stack direction='row'>
                            <Typography fontSize={16} fontWeight={600}>
                                {props.item.title}             
                            </Typography>
                            <Typography fontSize={16}>
                                - {props.item.subtitle}
                            </Typography>
                        </Stack>                        
                    </Box>
                </Stack>                
            </Box>       
        </Link> 
    );
}

export default ProductItem;