import React, { useCallback, useState } from "react";
import { Box, Stack, Typography } from '@mui/material';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

library.add(faPhone, faEnvelope, faLocationDot);

const containerStyle = {
    width: '100%',
    height: '350px',
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
            p: {xl: 4, lg: 4, md: 4, sm: 4, xs: 2, xxs: 2},
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
                        spacing={0}
                        alignItems={'start'}
                    >
                        <Typography
                            fontSize={16}
                            fontWeight={'bold'}
                        >
                            Κρήτης 80, Θεσσαλονίκη
                        </Typography>
                        <Typography
                            fontSize={14}
                        >
                            Ελλάδα, Τ.Κ. 54646
                        </Typography>                    
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