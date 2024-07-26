import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const FuncCard = (props) => {
    return(
        <Card variant="outlined" sx={{ maxWidth: {lg: 400, md: 350, sm: 300, xs: 200, xxs: 150}, boxShadow: '1px 2px 3px -2px black', backgroundColor: '#fffcf5' }}>
            {props.icon}            
            <CardContent>
                <Typography sx={{ fontSize: {lg: 16, md: 16, sm: 14, xs: 12, xxs: 10} }} color="text.secondary" gutterBottom>
                    {props.text}
                </Typography>                
            </CardContent>
        </Card>
    );
}

export default FuncCard;