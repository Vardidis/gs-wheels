import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import logo from '../assets/logo.jpg';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AdjustIcon from '@mui/icons-material/Adjust';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import AttributionOutlinedIcon from '@mui/icons-material/AttributionOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Stack } from "@mui/material";
import { Link } from 'react-router-dom';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Global } from '@emotion/react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const Sidemenu = () => {
    const {isDesktop, setSettings} = useContext(Context);
    const [open, setOpen] = useState(false);
    const [openDesk, setOpenDesk] = useState(false);
    const [themeSelect, setThemeSelect] = useState('Ανοιχτό');
    const [lang, setLang] = useState('Ελληνικά');
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const handleTheme = (event) => {
      setThemeSelect(event.target.value);
    };

    const handleLang = (event) => {
        setLang(event.target.value);
      };

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const toggleDrawerDesk = (newOpen) => () => {
        setOpenDesk(newOpen);
    };

    useEffect(() => {
        setSettings({
            'theme': themeSelect,
            'lang': lang,
        })
    }, [themeSelect, lang])

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 550,
        bgcolor: 'theme.light',
        boxShadow: 24,
        p: 4,
        border: "none",
        textAlign: "center",
        borderRadius: 1,
        height: '80vh',
        overflowY: 'auto',
      };

    if(isDesktop){
        return(
            <>            
                <Box component="section"
                    sx={{ 
                        width: {md: 200, xl: 200},
                        height: '100vh',
                        borderRight: '1px solid grey',
                        boxShadow: "2px 0px 2px -3px black",
                        backgroundColor: "theme.light",                    
                    }}>
                    <Stack 
                        justifyContent="space-between"
                        alignItems="center"
                        height="100vh"
                    >
                        <div>
                            <img src={logo} style={{width: 50, padding: 10, cursor: 'pointer'}}/>
                        </div>                    
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <Link to='/' style={{textDecoration: 'none'}}>                    
                                <ListItem className="hoverable" sx={{gap: 1}}>
                                    <HomeIcon sx={{color: "highlight.main"}}/>
                                    <ListItemText primary="Αρχική" sx={{color: "highlight.main"}}/>
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
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            <ListItem className="hoverable" sx={{gap: 1}} onClick={handleOpen}>
                                <ChatBubbleOutlineIcon/>
                                <ListItemText primary="Επικοινωνία"/>
                            </ListItem>         
                            <ListItem className="hoverable" sx={{gap: 1}} onClick={toggleDrawerDesk(true)}>
                                <SettingsIcon/>
                                <ListItemText primary="Ρυθμίσεις"/>
                            </ListItem>                    
                        </List>
                    </Stack>                   
                </Box>
                <Drawer
                    anchor={'bottom'}
                    open={openDesk}
                    onClose={toggleDrawerDesk(false)}
                >
                    <Box sx={{backgroundColor: 'theme.light' }}>
                        <List>
                            <ListItem>
                                <ListItemText primary='Θέμα'/>
                                <Select
                                    value={themeSelect}
                                    label="Θέμα"
                                    onChange={handleTheme}
                                    sx={{ height: '40px' }}                        
                                >
                                    <MenuItem value={1}>Ανοιχτό</MenuItem>
                                    <MenuItem value={2}>Σκούρο</MenuItem>
                                </Select>                                                                   
                            </ListItem>
                            <Divider/>
                            <ListItem>
                                <ListItemText primary='Γλώσσα'/>   
                                <Select
                                    value={lang}
                                    label="Γλώσσα"
                                    onChange={handleLang}
                                    sx={{ height: '40px' }}
                                >
                                    <MenuItem value={1}>Ελληνικά</MenuItem>
                                    <MenuItem value={2}>Αγγλικά</MenuItem>
                                </Select>                           
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
                <Modal
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Stack spacing={1}>
                            <div className='modal-info'>
                                <InfoOutlinedIcon fontSize="small"/>
                                <label>Επικοινωνήστε μαζί μας για οποιαδήποτε διευκρίνηση ή απορία έχετε.</label>
                            </div>
                            <TextField id="outlined-basic" label="Όνομα" variant="outlined"/>
                            <TextField id="outlined-basic" label="Τηλέφωνο επικοινωνίας" variant="outlined"/>
                            <TextField id="outlined-basic" label="Email" variant="outlined"/>
                            <TextField id="outlined-basic" label="Πείτε μας λίγα λόγια" variant="outlined" multiline rows={5} sx={{ height: '100px' }}/>
                            <Button variant="contained" sx={{ position: 'absolute', bottom: '25px', width: '89%' }}>Υποβολή</Button>                            
                        </Stack>                                                                  
                    </Box>
                </Modal>
            </>
        )
    }else{
        return(
            <>
                <Global
                    styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(20% - ${56}px)`,
                        overflow: 'visible',
                    },
                    }}
                />
                <Box component="section"
                    sx={{           
                        width: 70,
                        height: '100vh',
                        borderRight: '1px solid grey',
                    }}>
                    <Stack 
                        justifyContent="space-between"
                        alignItems="center"
                        height="93vh"
                    >
                        <img src={logo} style={{width: 50, padding: 4}}/>
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            <ListItem sx={{ paddingBottom: 4 }}>
                                <HomeIcon fontSize="large" sx={{color:"red"}}/>
                            </ListItem>         
                            <ListItem sx={{ paddingBottom: 4 }}>
                                <AdjustIcon fontSize="large"/>
                            </ListItem>     
                            <ListItem sx={{ paddingBottom: 4 }}>
                                <Inventory2OutlinedIcon fontSize="large"/>
                            </ListItem>     
                            <ListItem sx={{ paddingBottom: 4 }}>
                                <AttributionOutlinedIcon fontSize="large"/>
                            </ListItem>                
                        </List>
                        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                            <ListItem sx={{ paddingBottom: 4 }}>
                                <ChatBubbleOutlineIcon fontSize="large"/>
                            </ListItem>         
                            <ListItem sx={{ paddingBottom: 4 }} onClick={toggleDrawer(true)}>
                                <SettingsIcon fontSize="large"/>
                            </ListItem>                    
                        </List>
                    </Stack>                    
                </Box>
                <SwipeableDrawer          
                    anchor="bottom"
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    disableSwipeToOpen={true}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                </SwipeableDrawer>
            </>            
        );
    }
}

export default Sidemenu;