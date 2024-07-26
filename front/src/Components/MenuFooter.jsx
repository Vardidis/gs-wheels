import React, { useContext, useState } from "react";
import { Context } from "./Context";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { List, ListItem, ListItemText, Modal, SwipeableDrawer, Drawer } from '@mui/material';
import Contact from "./Contact";
import SettingsBox from "./SettingsBox";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faGear } from '@fortawesome/free-solid-svg-icons';
library.add(faGear, faComment);

const MenuFooter = () => {
    const {isDesktop} = useContext(Context);
    const [open, setOpen] = useState(false);
    const [openDesk, setOpenDesk] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const handleClose = () => setOpenModal(false);
    const handleOpen = () => setOpenModal(true);
    const iconSize = isDesktop ? 'lg' : 'xl';

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const toggleDrawerDesk = (newOpen) => () => {
        setOpenDesk(newOpen);
    };
    
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
            { isDesktop 
            ? <Drawer
                anchor={'bottom'}
                open={openDesk}
                onClose={toggleDrawerDesk(false)}
            >                
                <SettingsBox/>
            </Drawer>
            : <SwipeableDrawer          
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
            }
            <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                <ListItem className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 1}, backgroundColor: 'transparent' }} onClick={handleOpen}>
                    <FontAwesomeIcon icon={faComment} size={iconSize}/>
                    { isDesktop && <ListItemText primary="Επικοινωνία"/> }
                </ListItem>         
                <ListItem className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 1}, backgroundColor: 'transparent' }} onClick={isDesktop ? toggleDrawerDesk(true) : toggleDrawer(true)}>
                    <FontAwesomeIcon icon={faGear} size={iconSize}/>
                    { isDesktop && <ListItemText primary="Ρυθμίσεις"/> }
                </ListItem>                    
            </List>            
        </>            
    );            
}

export default MenuFooter;