import React from 'react';
import { Stack, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useContext } from 'react';
import { Context } from './Context';
import { Link } from 'react-router-dom';

const EshopMenu = () => {
    const {allProducts} = useContext(Context);
    const count = allProducts.length;

    return (
        <Stack
            spacing={3}
            alignItems={'end'}
        >
            <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
            >
                <Typography>
                    ({count})
                </Typography>
                <Typography
                    fontSize={22}
                    fontWeight={'bold'}
                    sx={{
                        lineHeight: '100%'
                    }}
                >
                    Προϊόντα
                </Typography>                
            </Stack>   
            <Link
                to={`/edit`}
                style={{
                    textDecoration: 'none'
                }}
            >
                <Stack
                    className={'hoverable'}
                    direction={'row'}
                    justifyContent={'space-between'}
                    spacing={1}
                    sx={{
                        bgcolor: 'white',
                        borderRadius: 3,
                        padding: 2,
                        color: '#232323',
                    }}
                >                
                    <AddCircleOutlineIcon/>
                    <Typography
                        fontSize={18}
                    >
                        Προσθήκη προϊόντων
                    </Typography>                
                </Stack>
            </Link>    
        </Stack>
    );
};

export default EshopMenu;