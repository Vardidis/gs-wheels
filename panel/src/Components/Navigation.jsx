import React, { useContext, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Context } from './Context';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const menuOptions = ['Γενικό Πάνελ', 'Success stories', 'Κείμενα', 'Προϊόντα', 'Πολυμέσα', 'Μηνύματα'];
    const navOptions = ['/', '/success-stories', '/texts', '/products', '/media', '/messages'];

    const location = useLocation();
    const navigate = useNavigate();
    const [menuSelection, setMenuSelection] = useState(null);
    const {isDesktop} = useContext(Context);

    return (
        <Stack
            direction={isDesktop ? 'column' : 'row'}
            spacing={1}
            sx={{
                overflowX: !isDesktop && 'auto',
                padding: '4px 0px'
            }}
        >           
            {menuOptions.map((option, index) => (               
                <Stack
                    className={'hoverable'}  
                    onClick={()=>navigate(navOptions[index])}                     
                    direction={'row'}
                    sx={{
                    bgcolor: location.pathname === navOptions[index] ? '#e5e8f3' : 'white',
                    borderRadius: 1,
                    padding: 2,
                    }}                        
                >
                    <Typography
                        textAlign={!isDesktop && 'center'}
                        sx={{
                            whiteSpace: 'nowrap',
                            minWidth: 100
                        }}
                    >
                    {option}
                    </Typography>
                </Stack>                     
            ))}                                            
        </Stack>     
    );
};

export default Navigation;