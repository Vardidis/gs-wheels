import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import { Box, FormControlLabel, Switch, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useContext } from "react";
import { Context } from "./Context";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 46,
    height: 28,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      marginRight: 4,
      marginTop: 4,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 20,
      height: 20,
      '&::before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      },
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2,
    },
  }));

const LangSwitch = () => {
    const [alignment, setAlignment] = useState('web');
    const [greek, setGreek] = useState(true);
    const {isDesktop} = useContext(Context);

    const handleChange = (event, newAlignment) => {
      setAlignment(newAlignment);
      setGreek(!greek);
    };
    
    const style = !isDesktop
    ? {
      position: 'fixed',
      left: 2
    }
    : {
      paddingLeft: 5
    }
    
    return(
      <Box sx={style}>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          size='small'
        >
          <ToggleButton value="gr">GR</ToggleButton>
          <ToggleButton value="en">EN</ToggleButton>
        </ToggleButtonGroup>
      </Box>      
    );
}

export default LangSwitch;