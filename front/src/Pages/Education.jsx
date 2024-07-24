import React from "react";
import { useParams } from "react-router-dom";
import FullCustom from "../Components/FullCustom";
import Basics from '../Components/Basics';
import Interior from '../Components/Interior';
import LifeCoaching from '../Components/LifeCoaching';
import FuncRepair from "../Components/FuncRepair";

const Education = () => {
    const {service} = useParams();

    if(service === 'vasikes-arxes'){
        return(
            <Basics/>
        );
    }else if(service === 'apokatastasi'){
        return(
            <FuncRepair/>
        )
    }else if(service === 'life-coaching'){
        return(
            <LifeCoaching/>
        )
    }else if(service === 'full-custom'){
        return(
            <FullCustom/>
        )
    }else if(service === 'interior-design'){
        return(
            <Interior/>
        )
    }
    
}

export default Education;