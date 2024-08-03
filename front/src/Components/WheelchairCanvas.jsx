import React, { useContext } from "react";
import rotsi from '../assets/r745.jpg';
import { Box, Stack, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import brakes from '../assets/brakes.jpg';
import back from '../assets/back.jpg';
import brakes2 from '../assets/brakes2.jpg';
import CanvasImage from "./CanvasImage";
import { Context } from "./Context";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const WheelcharCanvas = () => {
    const {isDesktop} = useContext(Context);
    const placing = isDesktop ? 'row' : 'column';

    return(
        <Box  sx={{ display: 'flex', justifyContent: 'center' }}>
            <Stack spacing={2} direction={placing}>
                <img src={rotsi} alt='' style={{
                    maxWidth: '650px',
                    borderRadius: 5,
                }}/>
                <Box>
                    <Accordion sx={{ backgroundColor: 'rgb(247, 247, 247)' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Λεπτομέρειες
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack spacing={2}>
                                <CanvasImage image={brakes} text={'Φρένα scissor ή push to brake'}/>
                                <CanvasImage image={brakes2} text={'Ρυθμιζόμενο κέντρο βάρους'}/>
                                <CanvasImage image={back} text={'Ρυθμιζόμενη γωνία πλάτης'}/>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>                 
                </Box>               
            </Stack>
        </Box>        
    );
}

export default WheelcharCanvas;