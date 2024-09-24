import React, { useContext } from "react";
import './Components.css';
import Servicecard from "./Servicecard";
import bgimg from '../assets/bgimg2.jpg';
import gw from '../assets/giotis-wheelie.jpg';
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
        paddingLeft: {sm: 5, xs: 3, xxs: 2},
        paddingRight: {sm: 5, xs: 3, xxs: 2},
        paddingTop: {sm: 3, xs: 3, xxs: 3},
        paddingBottom: {sm: 5, xs: 3, xxs: 3}
    }
    return(
        <Box sx={style}>
            <Stack spacing={{xl: 2, lg: 2, md: 2, sm: 5, xs: 5, xxs: 5}}>
                {isDesktop
                ? <>                
                    <Stack direction='row' spacing={2}>
                        <Link to='/service/apokatastasi' style={{textDecoration: 'none'}}>
                            <Servicecard image={bgimg} text={'1. Λειτουργική Αποκατάσταση'}/>
                        </Link>
                        <Link to='/service/life-coaching' style={{textDecoration: 'none'}}>
                            <Servicecard image={gw} text={'2. Συμβουλευτική'}/>
                        </Link>
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <Link to='/service/interior-design' style={{textDecoration: 'none'}}>
                            <Servicecard image={id} text={'3. Διαμόρφωση Χώρου'}/>
                        </Link>
                    </Stack>         
                </>
                : <>
                    <Link to='/service/apokatastasi' style={{textDecoration: 'none'}}>
                        <Servicecard image={bgimg} text={'1. Λειτουργική Αποκατάσταση'}/>
                    </Link>
                    <Link to='/service/life-coaching' style={{textDecoration: 'none'}}>
                        <Servicecard image={gw} text={'2. Συμβουλευτική'}/>
                    </Link>
                    <Link to='/service/interior-design' style={{textDecoration: 'none'}}>
                        <Servicecard image={id} text={'3. Διαμόρφωση Χώρου'}/>
                    </Link>
                </>}
            </Stack>
        </Box>
    );
}

export default Servicebox;