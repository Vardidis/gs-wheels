import { Box, Typography, Stack, keyframes } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StarRateIcon from '@mui/icons-material/StarRate';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ProductItem = (props) => { 
    return(
        <Link to={`/product/${props.index}`} style={{ textDecoration: 'none', color: 'white' }}>
            <Box sx={{ boxShadow: 12, cursor: 'pointer', borderRadius: 2, padding: 0.5, bgcolor: '#30343f', animation: `${fadeIn} 1s ease-in-out` }}>               
                <img src={props.item.thumbnail} alt='' style={{ width: '100%', borderRadius:5, maxHeight: 250, objectFit: 'cover' }}/>
                <Stack>             
                    <Box sx={{ padding: 1 }}>
                        <Stack>
                            <Stack sx={{ padding: 1 }} spacing={-0.5}>
                                <Typography fontSize={20} fontWeight={600}>
                                    {props.item.title}             
                                </Typography>
                                {props.item.tag === 'wheelchairs' &&
                                    <Stack direction='row' spacing={0.5} alignItems='center' sx={{ color: 'rgb(200, 200, 200)' }}>
                                        <StarRateIcon fontSize='sm'/>
                                        <Typography fontSize={15} sx={{ color: 'rgb(200, 200, 200)' }}>
                                            full custom
                                        </Typography>
                                    </Stack>
                                }
                            </Stack>
                            
                            <Typography fontSize={15} sx={{ padding: 1 }}>
                                {props.item.subtitle}
                            </Typography>
                        </Stack>                        
                    </Box>
                </Stack>                
            </Box>       
        </Link> 
    );
}

export default ProductItem;