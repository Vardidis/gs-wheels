import React from "react";
import { CardContent, CardMedia, Typography, CardActionArea, Card } from '@mui/material';


const Infocard = (props) => {
    return(
        <Card sx={{ maxWidth: {lg: 400, md: 325, sm: 450, xs: 325, xxs: 200}, maxHeight: {lg: 375, md: 275, sm: 325, xs: 225, xxs: 200} }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={props.image}
                    alt="green iguana"
                    sx={{ height: {lg: 120, md: 100, sm: 100, xs: 80, xxs: 60} }}
                />
                <CardContent>
                    <Typography variant="body2" color="text.primary" fontSize={{lg: 16, md: 14, sm: 16, xs: 12, xxs: 10}}>
                        Στη GS Wheelchairs γνωρίζουμε ότι κάθε άτομο είναι διαφορετικό, και οι ανάγκες του ξεχωριστές. Για τον λόγο αυτό ειδικευόμαστε στην κατασκευή προσαρμοσμένων αναπηρικών αμαξιδίων, σχεδιασμένων αποκλειστικά για τις ανάγκες
                        του κάθε ατόμου.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Infocard;