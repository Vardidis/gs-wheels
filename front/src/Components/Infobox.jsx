import React, { useContext } from "react";
import './Components.css';
import { Stack } from '@mui/material';
import { Context } from "./Context";
import { Link } from 'react-router-dom';
import Infocard from "./Infocard";
import bg1 from '../assets/interior3.jpg';
import bg2 from '../assets/bgimg2.jpg';

const Infobox = () => {
    const {isDesktop} = useContext(Context);
    if(isDesktop){
        return(
            <Stack direction='row' spacing={2} sx={{ justifyContent: "center" }}>
                <Link to='/products' style={{ textDecoration: 'none' }}>
                    <Infocard image={bg1}/>
                </Link>
                <Link to='/services' style={{ textDecoration: 'none' }}>
                    <Infocard image={bg2}/>
                </Link>
            </Stack>
        );
    }else{
        return(
            <Stack direction='row' spacing={2} sx={{ justifyContent: "center" }}>
                <Link to='/products' style={{ textDecoration: 'none' }}>
                    <Infocard image={bg1}/>
                </Link>
            </Stack>
        )
    }
}

export default Infobox;