import React, { useContext, useEffect} from "react";
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText, Box } from '@mui/material';
import { Context } from "./Context";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faClipboard, faShop, faAddressCard, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import {ReactComponent as HomeIcon} from '../assets/ICON-1_Home.svg';
import {ReactComponent as AboutIcon} from '../assets/ICON-2_AboutUs.svg';
import {ReactComponent as ServicesIcon} from '../assets/ICON-3_Services.svg';
import {ReactComponent as ProductsIcon} from '../assets/ICON-4_Products.svg';
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
        el.style.backgroundColor = '#d85704';
        el.style.color = 'white';
    }, [navSelection]);

    return(
        <Box>        
            <List id='menu-list' sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
                <NavLink to='/' className='navlink' onClick={()=>setNavSelection(0)}>                    
                    <ListItem id='0' className="hoverable" sx={{gap: 1, paddingBottom: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, paddingTop: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, backgroundColor: '#d85704', borderRadius: 2}}>                                             
                        <HomeIcon 
                            fill={navSelection === 0 ? 'white' : '#30343f'}
                            width={20}
                            height={20}
                        />                          
                        { isDesktop && <ListItemText primary="Αρχική"/> }
                    </ListItem>    
                </NavLink>  
                <NavLink to='/about-us' className='navlink' onClick={()=>setNavSelection(1)}>  
                    <ListItem id='1' className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, paddingTop: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, backgroundColor: 'transparent', borderRadius: 2 }}>
                        <AboutIcon 
                            fill={navSelection === 1 ? 'white' : '#30343f'}
                            width={20}
                            height={20}
                        />      
                        { isDesktop && <ListItemText primary="Σχετικά με εμάς"/> }
                    </ListItem> 
                </NavLink>       
                <NavLink to='/services' className='navlink' onClick={()=>setNavSelection(2)}>     
                    <ListItem id='2' className="hoverable" sx={{ gap: 1,paddingBottom: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, paddingTop: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, backgroundColor: 'transparent', borderRadius: 2 }}>
                        <ServicesIcon 
                            fill={navSelection === 2 ? 'white' : '#30343f'}
                            width={20}
                            height={20}
                        />      
                        { isDesktop && <ListItemText primary="Υπηρεσίες"/> }
                    </ListItem> 
                </NavLink>    
                <NavLink to='/products/wheelchairs' className='navlink' onClick={()=>setNavSelection(3)}>  
                    <ListItem id='3' className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, paddingTop: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, backgroundColor: 'transparent', borderRadius: 2 }}>
                        <ProductsIcon 
                            fill={navSelection === 3 ? 'white' : '#30343f'}
                            width={20}
                            height={20}
                        />      
                        { isDesktop && <ListItemText primary="Προϊόντα"/> }
                    </ListItem>     
                </NavLink>                        
            </List>
        </Box>
    );
}

export default Menulist;