import React from "react";
import { CardContent, CardMedia, Typography, CardActionArea, Card } from '@mui/material';


const Infocard = (props) => {
    return(
        <Card sx={{ maxWidth: {xl: 600, lg: 400, md: 325, sm: 500, xs: 325, xxs: 200}, maxHeight: {lg: 375, md: 275, sm: 325, xs: 225, xxs: 200} }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={props.image}
                    alt="green iguana"
                    sx={{ height: {xl: 140, lg: 120, md: 100, sm: 120, xs: 80, xxs: 60} }}
                />
                <CardContent sx={{ height: {xl: 150, lg: 130, md: 140, sm: 140, xs: 100, xxs: 120} }}>
                    <Typography variant="body2" color="text.primary" fontSize={{xl: 20, lg: 16, md: 14, sm: 16, xs: 12, xxs: 10}}>
                        {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Infocard;