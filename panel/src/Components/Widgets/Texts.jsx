import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Texts = () => {
    return (
        <Stack
            spacing={2}
        >
            <Typography
                fontSize={24}
                textAlign={'center'}
            >
                Κείμενα
            </Typography>
            <Stack
                spacing={0.5}
            >
                <Stack                      
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    sx={{
                        bgcolor: '#f5f5f5',
                        padding: '4px 8px',
                        borderRadius: 1,
                        width: 'fit-content'
                    }}
                >
                    <Typography>
                        Αρχική
                    </Typography>
                </Stack>
                <Stack                      
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    sx={{
                        bgcolor: '#f5f5f5',
                        padding: '4px 8px',
                        borderRadius: 1,
                        width: 'fit-content'
                    }}
                >
                    <Typography>
                        Σχετικά με εμάς
                    </Typography>
                </Stack>
                <Stack                      
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    sx={{
                        bgcolor: '#f5f5f5',
                        padding: '4px 8px',
                        borderRadius: 1,
                        width: 'fit-content'
                    }}
                >
                    <Typography>
                        Υπηρεσίες
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Texts;