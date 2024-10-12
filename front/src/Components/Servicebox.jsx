import React from "react";
import './Components.css';
import Servicecard from "./Servicecard";
import bgimg from '../assets/bgbg2.jpg';
import bgimg2 from '../assets/gbgbgbgb.jpg';
import gw from '../assets/gbgb.jpg';
import id from '../assets/interior1.jpg';
import { Box, keyframes, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Servicebox = () => {
    return(
        <Box sx={{ padding: {lg: 5, md: 5, sm: 3, xs: 1, xxs: 1} }}>
            <Grid container justifyContent='center' rowSpacing={4} columnSpacing={2} sx={{ maxWidth: 1400, animation: `${fadeIn} 1s ease-in-out` }}>                                      
                <Grid item xs={12} md={6}>            
                    <Link to='/service/apokatastasi' style={{textDecoration: 'none'}}>
                        <Servicecard image={bgimg2} text={'Λειτουργική Αποκατάσταση'}/>
                    </Link>
                </Grid>
                <Grid item xxs={12} md={6}>
                    <Link to='/service/education' style={{textDecoration: 'none'}}>
                        <Servicecard image={bgimg} text={'Εκπαίδευση'}/>
                    </Link>      
                </Grid>
                <Grid item xxs={12} md={6}>
                    <Link to='/service/interior-design' style={{textDecoration: 'none'}}>
                            <Servicecard image={id} text={'Διαμόρφωση Χώρου'}/>
                    </Link>
                </Grid>
                <Grid item xxs={12} md={6}>
                    <Link to='/service/life-coaching' style={{textDecoration: 'none'}}>
                        <Servicecard image={gw} text={'Συμβουλευτική'}/>
                    </Link>
                </Grid>                                                                             
            </Grid>
        </Box>
    );
}

export default Servicebox;