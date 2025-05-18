import React from "react";
import { Box, Stack, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const MenuList = () => {
    return(
        <Stack direction='row' alignItems='center' justifyContent='center' spacing={5} sx={{ backgroundColor: 'transparent', height: '100%' }}>                        
                <NavLink to='/' className='navlink' activeclassname='active' style={{ textDecoration: 'none' }}>                    
                    <Box>                    
                        <Typography>
                            Προϊόντα
                        </Typography>
                    </Box>  
                </NavLink>    
                <NavLink to='/messages' className='navlink' activeclassname='active'style={{ textDecoration: 'none' }}>           
                    <Box>                    
                        <Typography>
                            Μηνύματα
                        </Typography>
                    </Box>                     
                </NavLink>    
                <NavLink to='/uploads' className='navlink' activeclassname='active'style={{ textDecoration: 'none' }}>           
                    <Box>                    
                        <Typography>
                            Media
                        </Typography>
                    </Box>                     
                </NavLink>                    
                <NavLink to='/success-stories' className='navlink' activeclassname='active'style={{ textDecoration: 'none' }}>           
                    <Box>                    
                        <Typography>
                            Success Stories
                        </Typography>
                    </Box>                     
                </NavLink> 
        </Stack>
    );
}

export default MenuList;