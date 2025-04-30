import React, { useCallback, useState } from "react";
import { Box, Stack, Typography } from '@mui/material';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import LaunchIcon from '@mui/icons-material/Launch';

const containerStyle = {
    width: '100%',
    height: '350px'    
  }
  
  const center = {
    lat: 40.596625,
    lng: 22.958450
  }

const Info = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
      })
      const [map, setMap] = useState(null)
    
      const onLoad = useCallback(function callback(map) {       
        map.setZoom(17)
    
        setMap(map);
      }, [])
    
      const onUnmount = useCallback(function callback(map) {
        setMap(null)
      }, [])

    return(
        <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {xl: 750, lg: 550, md: 550, sm: 550, xs: 350, xxs: 325},
            bgcolor: 'theme.light',
            boxShadow: 24,
            p: 4,
            border: "none",
            textAlign: "center",
            borderRadius: 3,
            height: 'fit-content',
            overflowY: 'auto',
        }}>            
                <Stack
                    spacing={2}            
                >
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'start'}
                    >
                        <Stack         
                            spacing={-0.5}               
                            alignItems={'start'}
                        >
                            <Typography
                                fontSize={16}
                                fontWeight={'bold'}
                            >
                                Διεύθυνση
                            </Typography>
                            <Typography
                                fontSize={14}
                            >
                                Κρήτης 80, Θεσσαλονίκη
                            </Typography>                    
                        </Stack>
                        <LaunchIcon
                            className={'hoverable'}
                            onClick={()=>window.open('https://www.google.com/maps/place/Difros+Custom+Made+Wheelchairs/@40.5966063,22.9584522,17z/data=!4m7!3m6!1s0x14a838d41353a295:0x8d5082922a20e2e3!4b1!8m2!3d40.5966063!4d22.9584522!16s%2Fg%2F1hc5dmtxm?entry=ttu&g_ep=EgoyMDI1MDQyNy4xIKXMDSoASAFQAw%3D%3D', '_blank')}
                        />
                    </Stack>
                    {isLoaded && (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}          
                            onLoad={onLoad}
                            zoom={17}
                            onUnmount={onUnmount}
                            lat={'40.596625'}
                            lng={'22.958450'}
                            options={{
                                fullscreenControl: false, // Remove fullscreen button
                                streetViewControl: false, // Remove Street View
                                mapTypeControl: false, // Remove map type (satellite/terrain)
                                zoomControl: true, // Keep zoom buttons
                            }}                            
                        >
                            <Marker position={{lat: 40.596625, lng: 22.958450}}/>
                        </GoogleMap>
                    )}                    
                </Stack>                           
        </Box>
    );
}

export default Info;