import React, { useContext } from "react";
import './Components.css';
import Servicecard from "./Servicecard";
import img from '../assets/interior3.jpg';
import bgimg from '../assets/bgimg2.jpg';
import gw from '../assets/giotis-wheelie.jpg';
import fc from '../assets/full-custom.jpg';
import id from '../assets/interior3.jpg';
import { Box, Stack } from "@mui/material";
import { Context } from "./Context";
import { Link } from "react-router-dom";

const Servicebox = () => {
    const {isDesktop} = useContext(Context);
    const style = isDesktop ? {
        display: 'flex',
        justifyContent: 'center',
        paddingLeft: {xl: 0, lg: 0, md: 0},
        paddingRight: {xl: 0, lg: 0, md: 0},
        paddingTop: {lg: 0, md: 0},
        paddingBottom: {lg: 0, md: 0}
    }
    : {
        width: '100%',
        paddingLeft: {sm: 5, xs: 3, xxs: 1},
        paddingRight: {sm: 5, xs: 3, xxs: 1},
        paddingTop: {sm: 3, xs: 3, xxs: 3},
        paddingBottom: {sm: 5, xs: 3, xxs: 3}
    }
    return(
        <Box sx={style}>
            <Stack spacing={{xl: 2, lg: 2, md: 2, sm: 5, xs: 5, xxs: 5}}>
                {isDesktop
                ? <>                
                    <Stack direction='row' spacing={2}>
                        <Link to='/service/vasikes-arxes' style={{textDecoration: 'none'}}>
                            <Servicecard image={img} text={'1. Βασικές Αρχές'}/>
                        </Link>
                        <Link to='/service/apokatastasi' style={{textDecoration: 'none'}}>
                            <Servicecard image={bgimg} text={'2. Λειτουργική Αποκατάσταση'}/>
                        </Link>
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <Link to='/service/life-coaching' style={{textDecoration: 'none'}}>
                            <Servicecard image={gw} text={'3. Life Coaching'}/>
                        </Link>
                        <Link to='/service/full-custom' style={{textDecoration: 'none'}}>
                            <Servicecard image={fc} text={'4. Προσαρμογή Αμαξιδίου'}/>
                        </Link>                    
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <Link to='/service/interior-design' style={{textDecoration: 'none'}}>
                            <Servicecard image={id} text={'5. Interior Design'}/>
                        </Link>
                    </Stack>            
                </>
                : <>
                    <Link to='/service/vasikes-arxes' style={{textDecoration: 'none'}}>
                        <Servicecard image={img} text={'1. Βασικές Αρχές'}/>
                    </Link>
                    <Link to='/service/apokatastasi' style={{textDecoration: 'none'}}>
                        <Servicecard image={bgimg} text={'2. Λειτουργική Αποκατάσταση'}/>
                    </Link>
                    <Link to='/service/life-coaching' style={{textDecoration: 'none'}}>
                        <Servicecard image={gw} text={'3. Life Coaching'}/>
                    </Link>
                    <Link to='/service/full-custom' style={{textDecoration: 'none'}}>
                        <Servicecard image={fc} text={'4. Προσαρμογή Αμαξιδίου'}/>
                    </Link>
                    <Link to='/service/interior-design' style={{textDecoration: 'none'}}>
                        <Servicecard image={id} text={'5. Interior Design'}/>
                    </Link>
                </>}
            </Stack>
        </Box>
    );
}

export default Servicebox;