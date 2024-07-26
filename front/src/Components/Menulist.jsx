import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import { Context } from "./Context";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faClipboard, faShop, faAddressCard, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
library.add(faHouse, faClipboard, faShop, faAddressCard, faGraduationCap);

const Menulist = () => {
    const {isDesktop} = useContext(Context);
    const iconSize = isDesktop ? 'lg' : 'xl';

    return(
        <List id='menu-list' sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
            <Link to='/' style={{textDecoration: 'none'}}>                    
                <ListItem className="hoverable selected" sx={{gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent'}}>
                <FontAwesomeIcon icon={faHouse} size={iconSize} style={{ color: 'black' }}/>
                    { isDesktop && <ListItemText primary="Αρχική" sx={{ color: 'black' }}/> }                        
                </ListItem>    
            </Link>  
            <Link to='/services' style={{ textDecoration: 'none' }}>     
                <ListItem className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent' }}>
                    <FontAwesomeIcon icon={faGraduationCap} size={iconSize} style={{ color: 'black' }}/>
                    { isDesktop && <ListItemText primary="Εκπαίδευση" sx={{ color: 'black' }}/> }
                </ListItem> 
            </Link>    
            <Link to='/products' style={{ textDecoration: 'none' }}>  
                <ListItem className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent' }}>
                    <FontAwesomeIcon icon={faShop} size={iconSize} style={{ color: 'black' }}/>
                    { isDesktop && <ListItemText primary="Προϊόντα" sx={{ color: 'black' }}/> }
                </ListItem>     
            </Link>
            <Link to='/about-us' style={{ textDecoration: 'none' }}>  
                <ListItem className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent' }}>
                    <FontAwesomeIcon icon={faAddressCard} size={iconSize} style={{ color: 'black' }}/>
                    { isDesktop && <ListItemText primary="Σχετικά με εμάς" sx={{ color: 'black' }}/> }
                </ListItem> 
            </Link>               
        </List>
    );
}

export default Menulist;