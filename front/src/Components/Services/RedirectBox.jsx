import React from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import { Box, Button } from '@mui/material';

const RedirectBox = (props) => {
    return(
        <Box sx={{ 
            bottom: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10
        }}>
            <Link to={props.back} style={{ textDecoration: 'none' }}>
                <Button
                    variant="contained"
                    startIcon={<ArrowBackIcon/>}
                    sx={{
                        width: {sm: 150, xs: 100, xxs: 100},
                        fontSize: {xl: 16, lg: 14, md: 14, sm: 12, xs: 12, xxs: 10},
                        marginLeft: {xl: 70, lg: 15, sm: 15, sm: 5, xs: 1, xxs: 1},
                        bgcolor: 'rgb(40, 40, 40)'
                    }}
                >
                    Πισω
                </Button>
            </Link>   
            {!props.last &&   
                <Link to={props.forward} style={{ textDecoration: 'none' }}>
                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIcon/>}
                        sx={{
                            width: {sm: 150, xs: 100, xxs: 100},
                            fontSize: {xl: 16, lg: 14, md: 14, sm: 12, xs: 12, xxs: 10},
                            marginRight: {xl: 70, lg: 15, sm: 15, sm: 5, xs: 1, xxs: 1}
                        }}
                    >
                        Επομενο
                    </Button>
                </Link>
            }
        </Box>
    );
}

export default RedirectBox;