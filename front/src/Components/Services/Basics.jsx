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
        <Grid container
            columnSpacing={6}
            rowGap={6}       
            sx={{
                maxWidth: 1400,
                padding: '32px 24px'                          
            }}
        >
            <Grid item 
                size={{
                    xs: 12,
                    sm: 6,
                    lg: 4
                }}          
                sx={{
                    borderLeft: '2px solid #d85704',
                    paddingLeft: 1
                }}
            >     
                <TextWindow title={allTexts[4].items[0].title} text={allTexts[4].items[0].text}/>
            </Grid>
            <Grid item 
                size={{
                    xs: 12,
                    sm: 6,
                    lg: 4
                }}          
                sx={{
                    borderLeft: '2px solid #d85704',
                    paddingLeft: 1
                }}
            >     
                <TextWindow title={allTexts[4].items[1].title} text={allTexts[4].items[1].text}/> 
            </Grid>
            <Grid item 
                size={{
                    xs: 12,
                    sm: 6,
                    lg: 4
                }}          
                sx={{
                    borderLeft: '2px solid #d85704',
                    paddingLeft: 1
                }}
            >     
                <TextWindow title={allTexts[4].items[2].title} text={allTexts[4].items[2].text}/> 
            </Grid>
            <Grid item 
                size={{
                    xs: 12,
                    sm: 6,
                    lg: 4
                }}          
                sx={{
                    borderLeft: '2px solid #d85704',
                    paddingLeft: 1
                }}
            >     
                <TextWindow title={allTexts[4].items[3].title} text={allTexts[4].items[3].text}/> 
            </Grid>                                    
            <Grid item 
                size={{
                    xs: 12,
                    sm: 6,
                    lg: 4
                }}          
                sx={{
                    borderLeft: '2px solid #d85704',
                    paddingLeft: 1
                }}
            >     
                <TextWindow title={allTexts[4].items[4].title} text={allTexts[4].items[4].text}/> 
            </Grid>                         
        </Grid>                                                                                                                                   
    );
}

export default Basics;