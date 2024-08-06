import React, { useContext} from "react";
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import { Context } from "./Context";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faClipboard, faShop, faAddressCard, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
library.add(faHouse, faClipboard, faShop, faAddressCard, faGraduationCap);

const Menulist = () => {
    const {isDesktop} = useContext(Context);

    return(
        <List id='menu-list' sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
            <NavLink to='/' className='navlink' activeclassname='active'>                    
                <ListItem className="hoverable" sx={{gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent'}}>
                    <FontAwesomeIcon icon={faHouse} size='lg'/>
                    { isDesktop && <ListItemText primary="Αρχική"/> }
                </ListItem>    
            </NavLink>  
            <NavLink to='/services' className='navlink' activeclassname='active'>     
                <ListItem className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent' }}>
                    <FontAwesomeIcon icon={faGraduationCap} size='lg'/>
                    { isDesktop && <ListItemText primary="Εκπαίδευση"/> }
                </ListItem> 
            </NavLink>    
            <NavLink to='/products' className='navlink' activeclassname='active'>  
                <ListItem className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent' }}>
                    <FontAwesomeIcon icon={faShop} size='lg'/>
                    { isDesktop && <ListItemText primary="Προϊόντα"/> }
                </ListItem>     
            </NavLink>
            <NavLink to='/about-us' className='navlink' activeclassname='active'>  
                <ListItem className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent' }}>
                    <FontAwesomeIcon icon={faAddressCard} size='lg'/>
                    { isDesktop && <ListItemText primary="Σχετικά με εμάς"/> }
                </ListItem> 
            </NavLink>               
        </List>
    );
}

export default Menulist;