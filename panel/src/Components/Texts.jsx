import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const Texts = () => {
  return (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 3
        }}
    >
      <Stack
        direction='row'
        spacing={3}       
    >
        <Typography>
            Αρχική
        </Typography>
        <Typography>
            Σχετικά με εμάς
        </Typography>
        <Typography>
            Υπηρεσίες
        </Typography>        
      </Stack>
    </Box>
  );
};

export default Texts;