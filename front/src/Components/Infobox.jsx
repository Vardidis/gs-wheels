import React, { useState } from "react";
import './Components.css';
import bg1 from '../assets/interior3.jpg';
import {bg2} from '../assets/bgimg2.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Infobox = () => {

    return(
        <Card sx={{ maxWidth: 400, maxHeight: 375 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="120"
                    image={bg1}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography variant="body2" color="text.primary">
                        Στη GS Wheelchairs γνωρίζουμε ότι κάθε άτομο είναι διαφορετικό, και οι ανάγκες του ξεχωριστές. Για τον λόγο αυτό ειδικευόμαστε στην κατασκευή προσαρμοσμένων αναπηρικών αμαξιδίων, σχεδιασμένων αποκλειστικά για τις ανάγκες
                        του κάθε ατόμου.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Infobox;