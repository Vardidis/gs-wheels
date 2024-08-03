import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const FuncCard = (props) => {
    return(
        <Card variant="outlined" sx={{ maxWidth: {xl: 1000, lg: 600, md: 550, sm: 450, xs: 300, xxs: 250, borderRadius: 10}, boxShadow: '1px 2px 3px -2px black', backgroundColor: '#fffcf5', textAlign: 'center' }}>
            {props.icon}            
            <CardContent>
                <Typography sx={{ fontSize: {xl: 22, lg: 18, md: 18, sm: 18, xs: 16, xxs: 10} }} color="text.secondary" gutterBottom>
                    {props.text}
                </Typography>                
            </CardContent>
        </Card>
    );
}

export default FuncCard;