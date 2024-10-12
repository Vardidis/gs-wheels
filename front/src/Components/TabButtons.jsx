import React, { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";

const TabButtons = (props) => {
    const [selection, setSelection] = useState(0);
    const setSelected = (id) => {
        props.value(id);
        setSelection(id);
        const allEls = document.getElementsByClassName('box-selection');        
        for(let el of allEls){
            el.style.backgroundColor = 'transparent';
        }
        const el = document.getElementById(`box-${String(id)}`);
        console.log(el)
        const textEl = document.getElementById(`text-${String(id)}`);
        el.style.backgroundColor = '#30343f';
        textEl.style.color = 'white';
    }

    return(
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
            <Stack direction='row' spacing={1}>
                {props.buttons.map((element, index) => {      
                    return(        
                        <Box
                            key={index}
                            className='box-selection'
                            id={`box-${String(index)}`}
                            sx={{
                                padding: 2,
                                borderRadius: 30,
                                border: '1px solid #30343f',
                                cursor: 'pointer',
                                backgroundColor: selection === index ? '#30343f' : 'transparent',
                                color: 'white',
                                boxShadow: 8,
                                maxHeight: 20,
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            onClick={()=>{setSelected(index)}}
                        >
                            <Typography id={`text-${String(index)}`} fontSize={15} fontWeight={600}>
                                {element}
                            </Typography>
                        </Box>
                    );
                })};                
            </Stack>
        </Box>
    )
}

export default TabButtons;