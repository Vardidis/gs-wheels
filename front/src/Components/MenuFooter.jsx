import React, { useContext, useState } from "react";
import { Context } from "./Context";
import SettingsIcon from '@mui/icons-material/Settings';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { List, ListItem, ListItemText, Modal, SwipeableDrawer, Drawer } from '@mui/material';
import Contact from "./Contact";
import SettingsBox from "./SettingsBox";

const MenuFooter = () => {
    const {isDesktop} = useContext(Context);
    const [open, setOpen] = useState(false);
    const [openDesk, setOpenDesk] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);
    const handleOpen = () => setOpenModal(true);
  
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const toggleDrawerDesk = (newOpen) => () => {
        setOpenDesk(newOpen);
    };

    if(isDesktop){
        return(
            <>
                <Modal
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Contact/>
                </Modal>                
                <Drawer
                    anchor={'bottom'}
                    open={openDesk}
                    onClose={toggleDrawerDesk(false)}
                >
                    <SettingsBox/>
                </Drawer>
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
            </>            
        );
    }else{
        return(
            <>
                <Modal
                    open={openModal}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Contact/>
                </Modal> 
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem sx={{ paddingBottom: 4 }}>
                        <ChatBubbleOutlineIcon fontSize="large" onClick={handleOpen}/>
                    </ListItem>         
                    <ListItem sx={{ paddingBottom: 4 }} onClick={toggleDrawer(true)}>
                        <SettingsIcon fontSize="large"/>
                    </ListItem>                    
                </List>
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
                    <SettingsBox/>
                </SwipeableDrawer>
            </>            
        );
    }
}

export default MenuFooter;