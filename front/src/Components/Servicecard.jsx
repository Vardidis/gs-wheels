import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

const Servicecard = (props) => {
    return(
        <Card sx={{ width: {xl: 609, lg: 383, md: 300, sm: 600, xs: 500, xxs: 300}, textAlign: 'center' }}>
            <CardActionArea>
                <CardMedia
                    component="img"                    
                    image={props.image}
                    alt="green iguana"
                    sx={{ height: {xl: 200, lg: 140, md: 120, sm: 220, xs: 180, xxs: 140} }}
                />
                <CardContent>
                    <Typography variant="body2" color="text.primary" fontSize={{xl: 20, lg: 16, md: 16, sm: 22, xs: 20, xxs: 18}}>
                        {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Servicecard;