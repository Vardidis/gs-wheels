import React from "react";
import { Box, Stack, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

const ProductItem = (props) => {
    return(
        <Box className='product-box' sx={{ display: 'flex', gap: 1, p: 1.5, borderRadius: 2 }}>
            <Stack spacing={0.5}>
                <img src={props.image} aly=''/>
                <Typography fontSize={18}>
                    {props.title}
                </Typography>
            </Stack>
            <Stack spacing={1}>
                <Box sx={{ borderRadius: 1, padding: 0.5, bgcolor: 'rgb(242, 242, 242)', height: 25, width: 25, cursor: 'pointer', boxShadow: '1px 2px 3px -2px black' }}>
                    <CreateIcon/>
                </Box>       
                <Box sx={{ borderRadius: 1, padding: 0.5, bgcolor: 'rgb(242, 192, 192)', height: 25, width: 25, cursor: 'pointer', boxShadow: '1px 2px 3px -2px black' }}>
                    <DeleteIcon/>
                </Box>       
            </Stack>                                                 
        </Box>                
    );
}

export default ProductItem;