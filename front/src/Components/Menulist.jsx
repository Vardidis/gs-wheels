import React, { useContext, useEffect} from "react";
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText, Box } from '@mui/material';
import { Context } from "./Context";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faClipboard, faShop, faAddressCard, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
library.add(faHouse, faClipboard, faShop, faAddressCard, faGraduationCap);

const Menulist = () => {
    const {isDesktop, setNavSelection, navSelection} = useContext(Context);
    const iconSize = isDesktop ? 'md' : 'lg';

    useEffect(()=>{
        const allEls = document.getElementsByClassName('hoverable');

        for(let el of allEls){
            el.style.backgroundColor = 'transparent';
            el.style.color = '#30343f';
        }
        
        const el = document.getElementById(String(navSelection));
        el.style.backgroundColor = '#30343f';
        el.style.color = 'white';
    }, [navSelection]);

    return(
        <Box>        
            <List id='menu-list' sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
                <NavLink to='/' className='navlink' onClick={()=>setNavSelection(0)}>                    
                    <ListItem id='0' className="hoverable" sx={{gap: 1, paddingBottom: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, paddingTop: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, backgroundColor: '#30343f', borderRadius: 2}}>
                        <FontAwesomeIcon id='mob-0' icon={faHouse} size={iconSize}/>
                        { isDesktop && <ListItemText primary="Αρχική"/> }
                    </ListItem>    
                </NavLink>  
                <NavLink to='/about-us' className='navlink' onClick={()=>setNavSelection(1)}>  
                    <ListItem id='1' className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, paddingTop: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, backgroundColor: 'transparent', borderRadius: 2 }}>
                        <FontAwesomeIcon id='mob-1' icon={faAddressCard} size={iconSize}/>
                        { isDesktop && <ListItemText primary="Σχετικά με εμάς"/> }
                    </ListItem> 
                </NavLink>       
                <NavLink to='/services' className='navlink' onClick={()=>setNavSelection(2)}>     
                    <ListItem id='2' className="hoverable" sx={{ gap: 1,paddingBottom: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, paddingTop: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, backgroundColor: 'transparent', borderRadius: 2 }}>
                        <FontAwesomeIcon id='mob-2' icon={faGraduationCap} size={iconSize}/>
                        { isDesktop && <ListItemText primary="Υπηρεσίες"/> }
                    </ListItem> 
                </NavLink>    
                <NavLink to='/products' className='navlink' onClick={()=>setNavSelection(3)}>  
                    <ListItem id='3' className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, paddingTop: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, backgroundColor: 'transparent', borderRadius: 2 }}>
                        <FontAwesomeIcon id='mob-3' icon={faShop} size={iconSize}/>
                        { isDesktop && <ListItemText primary="Προϊόντα"/> }
                    </ListItem>     
                </NavLink>                        
            </List>
        </Box>
    );
}

export default Menulist;