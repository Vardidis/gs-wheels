import React from "react";
import Infobox from '../Components/Infobox';
import './Pages.css';
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const GetStarted = () => {
    return(
        <Stack spacing={2} sx={{ width: '100%', padding: 3, textAlign: 'center' }}>
            <Typography>
                Καλωσήρθατε στη GS Wheelchairs
            </Typography>
            <Stack direction='row' spacing={2} sx={{ justifyContent: "center" }}>
                <Link to='/products' style={{ textDecoration: 'none' }}>
                    <Infobox/>
                </Link>
                <Link to='/services' style={{ textDecoration: 'none' }}>
                    <Infobox/>
                </Link>
            </Stack>        
            <div>

            </div>    
        </Stack>
    );
}

export default GetStarted;