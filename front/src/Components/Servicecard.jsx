import React from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';

const Servicecard = (props) => {
    return(
        <Card sx={{ textAlign: 'center', borderRadius: 1, boxShadow: 12 }}>
            <CardActionArea>
                <CardMedia
                    component="img"                    
                    image={props.image}            
                    sx={{ height: {xl: 200, lg: 200, md: 150, sm: 220, xs: 180, xxs: 140} }}
                />
                <CardContent sx={{ bgcolor: '#30343f' }}>
                    <Typography variant="body2" color="white" fontWeight={600} fontSize={{xl: 20, lg: 16, md: 16, sm: 22, xs: 20, xxs: 18}}>
                        {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Servicecard;