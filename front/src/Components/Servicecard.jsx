import React, { useContext } from "react";
import { Card, CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import { Context } from "./Context";

const Servicecard = (props) => {
    const {isDesktop} = useContext(Context);
    
    return(
        <Card
            className={'scalable'}
            sx={{
                textAlign: 'center',
                borderRadius: 6,
                boxShadow: isDesktop && 12
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"                    
                    image={props.image}            
                    sx={{ height: {xl: 200, lg: 200, md: 150, sm: 220, xs: 180, xxs: 140} }}
                />
                <CardContent sx={{ bgcolor: '#d85704', padding: 2, paddingTop: {xxs: 1, xs: 1, sm: 1, md: 2, lg: 2, xl: 2}}}>
                    <Typography
                        variant="body2"
                        color="white"
                        fontWeight={600}
                        fontSize={{xl: 20, lg: 16, md: 16, sm: 22, xs: 20, xxs: 18}}
                    >
                        {props.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Servicecard;