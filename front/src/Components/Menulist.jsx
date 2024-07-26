import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AdjustIcon from '@mui/icons-material/Adjust';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AttributionOutlinedIcon from '@mui/icons-material/AttributionOutlined';
import { Context } from "./Context";

const Menulist = () => {
    const {isDesktop} = useContext(Context);
    const iconSize = isDesktop ? 'medium' : 'large';

    return(
        <List id='menu-list' sx={{ width: '100%', maxWidth: 360, bgcolor: 'transparent' }}>
            <Link to='/' style={{textDecoration: 'none'}}>                    
                <ListItem className="hoverable selected" sx={{gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent'}}>
                    <HomeIcon fontSize={iconSize}/>
                    { isDesktop && <ListItemText primary="Αρχική"/> }                        
                </ListItem>    
            </Link>  
            <Link to='/services' style={{ textDecoration: 'none' }}>     
                <ListItem className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent' }}>
                    <AdjustIcon fontSize={iconSize}/>
                    { isDesktop && <ListItemText primary="Υπηρεσίες" sx={{ color: "primary.main" }}/> }
                </ListItem> 
            </Link>    
            <Link to='/products' style={{ textDecoration: 'none' }}>  
                <ListItem className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent' }}>
                    <Inventory2OutlinedIcon fontSize={iconSize}/>
                    { isDesktop && <ListItemText primary="Προϊόντα" sx={{ color: "primary.main" }}/> }
                </ListItem>     
            </Link>
            <Link to='/about-us' style={{ textDecoration: 'none' }}>  
                <ListItem className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 4}, backgroundColor: 'transparent' }}>
                    <AttributionOutlinedIcon fontSize={iconSize}/>
                    { isDesktop && <ListItemText primary="Σχετικά με εμάς" sx={{ color: "primary.main" }}/> }
                </ListItem> 
            </Link>               
        </List>
    );
}

export default Menulist;