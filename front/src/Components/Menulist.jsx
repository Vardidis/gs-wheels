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
    if(isDesktop){
        return(
            <List id='menu-list' sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Link to='/' style={{textDecoration: 'none'}}>                    
                    <ListItem className="hoverable selected" sx={{gap: 1}}>
                        <HomeIcon/>
                        <ListItemText primary="Αρχική"/>
                    </ListItem>    
                </Link>  
                <Link to='/services' style={{textDecoration: 'none'}}>     
                    <ListItem className="hoverable" sx={{gap: 1}}>
                        <AdjustIcon sx={{color: "primary.main"}}/>
                        <ListItemText primary="Υπηρεσίες" sx={{color: "primary.main"}}/>
                    </ListItem> 
                </Link>    
                <Link to='/products' style={{textDecoration: 'none'}}>  
                    <ListItem className="hoverable" sx={{gap: 1}}>
                        <Inventory2OutlinedIcon sx={{color: "primary.main"}}/>
                        <ListItemText primary="Προϊόντα" sx={{color: "primary.main"}}/>
                    </ListItem>     
                </Link>
                <Link to='/about-us' style={{textDecoration: 'none'}}>  
                    <ListItem className="hoverable" sx={{gap: 1}}>
                        <AttributionOutlinedIcon sx={{color: "primary.main"}}/>
                        <ListItemText primary="Σχετικά με εμάς" sx={{color: "primary.main"}}/>
                    </ListItem> 
                </Link>               
            </List>
        );
    }else{
        return(
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Link to='/' style={{textDecoration: 'none'}}>   
                    <ListItem sx={{ paddingBottom: 4 }}>
                        <HomeIcon fontSize="large" sx={{color: "primary.main"}}/>
                    </ListItem>  
                </Link>    
                <Link to='/services' style={{textDecoration: 'none'}}>        
                    <ListItem sx={{ paddingBottom: 4 }}>
                        <AdjustIcon fontSize="large" sx={{color: "primary.main"}}/>
                    </ListItem>     
                </Link>
                <Link to='/products' style={{textDecoration: 'none'}}> 
                    <ListItem sx={{ paddingBottom: 4 }}>
                        <Inventory2OutlinedIcon fontSize="large" sx={{color: "primary.main"}}/>
                    </ListItem>     
                </Link>
                <Link to='/about-us' style={{textDecoration: 'none'}}>  
                    <ListItem sx={{ paddingBottom: 4 }}>
                        <AttributionOutlinedIcon fontSize="large" sx={{color: "primary.main"}}/>
                    </ListItem>       
                </Link>        
            </List>
        );
    }
}

export default Menulist;