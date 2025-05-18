import React from "react";
import './Components.css';
import Servicecard from "./Servicecard";
import bgimg from '../assets/bgbg2.jpg';
import bgimg2 from '../assets/gbgbgbgb.jpg';
import gw from '../assets/gbgb.jpg';
import id from '../assets/interior1.jpg';
import { Box, keyframes, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Service1 from '../assets/YPHRESIES-Plaisio_1.png';
import Service2 from '../assets/YPHRESIES-Plaisio_2.png';
import Service3 from '../assets/YPHRESIES-Plaisio_3.png';
import Service4 from '../assets/YPHRESIES-Plaisio_4.png';

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
            <Grid container
                justifyContent={'center'}
                rowSpacing={4}
                columnSpacing={32}
                sx={{
                    maxWidth: 1400,
                    padding: '48px 8px',
                    animation: `${fadeIn} 1s ease-in-out`
                }}
            >                                      
                <Grid item
                    size={{xxs: 12, sm: 11, md: 5.5}}
                >            
                    <Link to='/service/apokatastasi' style={{textDecoration: 'none'}}>
                        <Servicecard image={Service1} text={'Λειτουργική Αποκατάσταση'}/>
                    </Link>
                </Grid>
                <Grid item
                    size={{xxs: 12, sm: 11, md: 5.5}}
                >  
                    <Link to='/service/education' style={{textDecoration: 'none'}}>
                        <Servicecard image={Service2} text={'Εκπαίδευση'}/>
                    </Link>      
                </Grid>
                <Grid item
                    size={{xxs: 12, sm: 11, md: 5.5}}
                >  
                    <Link to='/service/interior-design' style={{textDecoration: 'none'}}>
                            <Servicecard image={Service3} text={'Διαμόρφωση Χώρου'}/>
                    </Link>
                </Grid>
                <Grid item
                    size={{xxs: 12, sm: 11, md: 5.5}}
                >  
                    <Link to='/service/life-coaching' style={{textDecoration: 'none'}}>
                        <Servicecard image={Service4} text={'Συμβουλευτική'}/>
                    </Link>
                </Grid>                                                                             
            </Grid>       
    );
}

export default Servicebox;