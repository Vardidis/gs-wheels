import { Grid, Box } from "@mui/material";
import React from "react";
import TextWindow from "./TextWindow";
import { useContext } from "react";
import { Context } from "../Context";
import { useState } from "react";
import { useEffect } from "react";

const Basics = () => {
    const {allTexts} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{               
        if(allTexts.length > 0){
            setLoading(false);
        }
    }, [allTexts])

    if(loading){
        return(
            <>Loading...</>
        )
    }

    return(
        <Box sx={{ padding: {lg: 5, md: 5, sm: 3, xs: 1, xxs: 1}, display: 'flex', justifyContent: 'center' }}>                                 
            <Grid container justifyContent='center' rowSpacing={4} columnSpacing={2} sx={{ maxWidth: 1400 }}>
                <Grid item xs={12} md={6} lg={4}>
                    <TextWindow title={allTexts[4].items[0].title} text={allTexts[4].items[0].text}/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextWindow title={allTexts[4].items[1].title} text={allTexts[4].items[1].text}/> 
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextWindow title={allTexts[4].items[2].title} text={allTexts[4].items[2].text}/> 
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <TextWindow title={allTexts[4].items[3].title} text={allTexts[4].items[3].text}/> 
                </Grid>                                    
                <Grid item xs={12} md={6} lg={4}>
                    <TextWindow title={allTexts[4].items[4].title} text={allTexts[4].items[4].text}/> 
                </Grid>                         
            </Grid>                                                                                                                        
        </Box>          
    );
}

export default Basics;