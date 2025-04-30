import React, { useContext, useState } from "react";
import { Context } from "./Context";
import { List, ListItem, ListItemText, ClickAwayListener, Modal, Typography, Paper, Popper, Fade, Box, Snackbar } from '@mui/material';
import Contact from "./Contact";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faGear } from '@fortawesome/free-solid-svg-icons';
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
    const [itemColor, setItemColor] = useState('#30343f');
    const [borderColor, setBorderColor] = useState('transparent');
    const [state, setState] = useState({
        openSnack: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const { vertical, horizontal, openSnack } = state;
    const iconSize = isDesktop ? 'md' : 'lg';
    
    const handleClose = () => {
        setOpenModal(false);
        setOpen(false);
    }
    const handleOpen = () => {
        setOpenModal(true);
        setOpen(false);
    }
    const openInfoMod = () => {
        setOpenInfoModal(true);
        setOpen(false);
    }
    const closeInfoMod = () => {
        setOpenInfoModal(false);
        setOpen(false);
    }

    const handleClick = (newPlacement) => (event) => {
        setMenuOpen(!menuOpen);
        setItemColor(menuOpen ? 'black' : 'white');
        setBorderColor(!menuOpen ? '#30343f' : 'transparent');
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    const handleCloseSnack = () => {
        setState({ ...state, openSnack: false });
    };

    const handleClickSnack = (newState) => {
        setState({ ...newState, openSnack: true });
    }

    return(
        <Box>
            <Snackbar
                open={openSnack}
                autoHideDuration={5000}
                anchorOrigin={{ vertical, horizontal }}
                onClose={handleCloseSnack}
                message="Η αποστολή ήταν επιτυχής. Σας ευχαριστούμε !"
            />    
            <Popper
                sx={{ zIndex: 1 }}
                open={open}
                anchorEl={anchorEl}
                placement={'right'}
                transition
                onClose={()=>setOpen(false)}
            >                
                {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>                        
                        <Paper sx={{ backgroundColor: '#30343f', color: 'white' }}>
                            <ClickAwayListener onClickAway={()=>setOpen(false)}>
                            <List>
                                <ListItem className='contact-list' onClick={()=>{handleOpen()}}>
                                    <Typography>
                                        Αποστολή μηνύματος
                                    </Typography>
                                </ListItem>
                                <ListItem className='contact-list' onClick={()=>openInfoMod()}>
                                    <Typography>
                                        Τοποθεσία καταστήματος
                                    </Typography>
                                </ListItem>                       
                            </List>
                            </ClickAwayListener>
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
                <Contact close={handleClose} snack={handleClickSnack}/>
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
                <ListItem className="hoverable"  sx={{ gap: 1, borderRadius: 2, paddingBottom: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, paddingTop: {lg: 1, md: 1, sm: 2, xs: 2, xxs: 2}, backgroundColor: borderColor, color: itemColor }} onClick={handleClick()}>
                    <FontAwesomeIcon icon={faComment} size={iconSize}/>
                    { isDesktop && <ListItemText primary="Επικοινωνία"/> }                    
                </ListItem>         
            </List>            
        </Box>            
    );            
}

export default MenuFooter;