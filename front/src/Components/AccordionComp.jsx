import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionComp = (props) => {
    return(
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{ fontWeight: 600, backgroundColor: '#FFFAF5' }}
            >
                {props.title}
            </AccordionSummary>
            <AccordionDetails sx={{ backgroundColor: '#FFFAF5' }}>
                {props.text}
            </AccordionDetails>
        </Accordion>
    );
}

export default AccordionComp;