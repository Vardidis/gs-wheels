import React, { useContext } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Context } from '../Context';

const SucStories = () => {
    const {allStories} = useContext(Context);

    return (
        <Stack
            spacing={2}
        >
            <Typography
                fontSize={24}
                textAlign={'center'}
            >
                Success Stories
            </Typography>
            <Stack
                direction={'row'}
                spacing={1}
                alignItems={'center'}
                justifyContent={'end'}
            >
                <Typography
                    fontWeight={'bold'}
                    fontSize={14}
                >
                    Συνολικά
                </Typography>
                <Typography>
                    {allStories.length}
                </Typography>
            </Stack>
            <Stack
                spacing={0.5}
            >            
                {allStories.map(story => (
                    <Stack                      
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        sx={{
                            bgcolor: '#f5f5f5',
                            padding: '4px 8px',
                            borderRadius: 1
                        }}
                    >
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            spacing={1}
                        >
                            <img
                                src={story.icon}
                            />
                            <Typography>
                                {story.name}
                            </Typography>
                        </Stack>                    
                        <Typography>
                            {story.title}
                        </Typography>
                    </Stack>
                ))}           
            </Stack>
        </Stack>
    );
};

export default SucStories;