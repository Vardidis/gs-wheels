import React, { useContext, useState } from "react";
import { Context } from "./Context";
import { List, ListItem, ListItemText, Modal, Typography, Paper, Popper, Fade } from '@mui/material';
import Contact from "./Contact";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faGear } from '@fortawesome/free-solid-svg-icons';
import LangSwitch from "./LangSwitch";
import Info from "./Info";
library.add(faGear, faComment);

const MenuFooter = () => {
    const {isDesktop} = useContext(Context);
    const [open, setOpen] = useState(false);
    const [openInfoModal, setOpenInfoModal] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [placement, setPlacement] = useState();
    const [menuOpen, setMenuOpen] = useState(false);
    const [itemColor, setItemColor] = useState('black');

    const handleClose = () => setOpenModal(false);
    const handleOpen = () => setOpenModal(true);
    const openInfoMod = () => setOpenInfoModal(true);
    const closeInfoMod = () => setOpenInfoModal(false);

    const handleClick = (newPlacement) => (event) => {
        setMenuOpen(!menuOpen);
        setItemColor(menuOpen ? 'black' : '#f68b24');
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return(
        <>
         <Popper
            sx={{ zIndex: 1 }}
            open={open}
            anchorEl={anchorEl}
            placement={'right'}
            transition
        >
            {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
                <Paper sx={{ backgroundColor: 'rgb(57, 57, 57)', color: 'white' }}>
                    <List>
                        <ListItem className='contact-list' onClick={()=>handleOpen()}>
                            <Typography>
                                Αποστολή μηνύματος
                            </Typography>
                        </ListItem>
                        <ListItem className='contact-list' onClick={()=>openInfoMod()}>
                            <Typography>
                                Πληροφορίες επικοινωνίας
                            </Typography>
                        </ListItem>                       
                    </List>
                </Paper>
            </Fade>
            )}
        </Popper>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Contact/>
            </Modal>         
            <Modal
                open={openInfoModal}
                onClose={closeInfoMod}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Info/>
            </Modal>               
            <List sx={{ width: '100%', bgcolor: 'transparent' }}>
                <ListItem className="hoverable"  sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 1}, backgroundColor: 'transparent', color: itemColor }} onClick={handleClick()}>
                    <FontAwesomeIcon icon={faComment} size='lg'/>
                    { isDesktop && <ListItemText primary="Επικοινωνία"/> }                    
                </ListItem>         
                <ListItem className="hoverable" sx={{ gap: 1, paddingBottom: {lg: 1, md: 1, sm: 4, xs: 4, xxs: 1}, backgroundColor: 'transparent' }}>
                    <LangSwitch/>           
                </ListItem>                    
            </List>            
        </>            
    );            
}

export default MenuFooter;