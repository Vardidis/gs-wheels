import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

const Servicecard = (props) => {
    return(
        <Card sx={{ width: {lg: 383, md: 300, sm: '100%', xs: '100%', xxs: '100%'}, textAlign: 'center' }}>
            <CardActionArea>
                <CardMedia
                    component="img"                    
                    image={props.image}
                    alt="green iguana"
                    sx={{ height: {lg: 140, md: 120, sm: 220, xs: 180, xxs: 140} }}
                />
                <CardContent>
                    <Typography variant="body2" color="text.primary" fontSize={{lg: 16, md: 16, sm: 22, xs: 20, xxs: 18}}>
                        {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Servicecard;