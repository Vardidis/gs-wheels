import React from 'react';
import { Stack } from '@mui/material';
import {OrbitProgress} from "react-loading-indicators";

const LoadingComp = () => {
    return (
        <Stack
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
                width: '100%',
                height: '70vh'
            }}
        >            
            <OrbitProgress color="#d85704" size="medium" text="" textColor="" />
        </Stack>            
    );
};

export default LoadingComp;