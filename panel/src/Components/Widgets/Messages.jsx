import React, { useContext } from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Context } from '../Context';

const Messages = () => {
    const {allMessages} = useContext(Context);

    return (
        <Stack
            spacing={2}            
        >
            <Typography
                fontSize={24}
                textAlign={'center'}
            >
                Μηνύματα
            </Typography>
            <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
                justifyContent={'end'}
            >
                <Typography
                    fontSize={14}
                    fontWeight={'bold'}
                >
                    Συνολικά
                </Typography>
                <Typography>
                    {allMessages.length}
                </Typography>
            </Stack>
            <Stack
                spacing={0.5}
            >            
                {allMessages.map((message, index) => (
                    <Stack                      
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        sx={{
                            bgcolor: '#f5f5f5',
                            padding: '4px 8px',
                            borderRadius: 1,
                            color: '#232323'
                        }}
                    >                           
                        <Typography
                            fontWeight={'bold'}
                            fontSize={15}
                        >
                            {message.name}
                        </Typography>
                        <Typography
                            sx={{                                
                                opacity: 0.9
                            }}
                        >
                            {message.email}
                        </Typography>                                                    
                    </Stack>
                ))}           
            </Stack>
        </Stack>
    );
};

export default Messages;