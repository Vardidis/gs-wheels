import { Box, Typography, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import StarRateIcon from '@mui/icons-material/StarRate';

const ProductItem = (props) => { 
    return(
        <Link
            to={`/product/${props.index}`}
            style={{
                textDecoration: 'none',
                color: '#555555'
            }}
        >
            <Stack
                justifyContent={'space-between'}
                sx={{
                    height: '100%'
                }}
            >          
                <Stack>     
                    <img
                        src={props.item.thumbnail}
                        alt=''
                        style={{
                            width: '100%',                        
                            maxHeight: 175,
                            objectFit: 'cover'
                        }}
                    />        
                    <Stack
                        spacing={-0.5}                     
                        sx={{
                            padding: '8px 16px',                                   
                        }}
                    >
                        <Typography fontSize={26} fontWeight={600} sx={{lineHeight: '100%'}}>
                            {props.item.title}             
                        </Typography>
                        {props.item.tag === 'wheelchairs' &&
                            <Stack direction='row' spacing={0.5} alignItems='center' sx={{ color: 'rgb(102, 102, 102)' }}>
                                <StarRateIcon fontSize='sm'/>
                                <Typography fontSize={15} sx={{ color: 'rgb(102, 102, 102)' }}>
                                    full custom
                                </Typography>
                            </Stack>
                        }
                    </Stack>                                   
                </Stack>              
                <Stack
                    spacing={1}
                    sx={{
                        padding: '8px 16px',                                   
                    }}
                >                                                    
                </Stack>               
                <Typography
                    fontSize={15}
                    sx={{
                        maxHeight: 50,
                        padding: '0px 16px'                    
                    }}
                >
                    {props.item.subtitle}
                </Typography>                                                         
            </Stack>       
        </Link> 
    );
}

export default ProductItem;