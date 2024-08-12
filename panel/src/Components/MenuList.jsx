import React from "react";
import { List, ListItem, ListItemText, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

const MenuList = () => {
    return(
        <Box>            
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
                <NavLink to='/' className='navlink' activeclassname='active' style={{ textDecoration: 'none' }}>                    
                    <ListItem sx={{gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent'}}>                    
                        <ListItemText primary="Προϊόντα" sx={{  color: 'black' }}/>
                    </ListItem>  
                </NavLink>    
                <NavLink to='/messages' className='navlink' activeclassname='active'style={{ textDecoration: 'none' }}>           
                    <ListItem sx={{gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent'}}>                    
                        <ListItemText primary="Μηνύματα" sx={{  color: 'black' }}/>
                    </ListItem> 
                </NavLink>    
                <NavLink to='/uploads' className='navlink' activeclassname='active'style={{ textDecoration: 'none' }}>           
                    <ListItem sx={{gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent'}}>                    
                        <ListItemText primary="Media" sx={{  color: 'black' }}/>
                    </ListItem> 
                </NavLink>   
            </List>
        </Box>
    );
}

export default MenuList;