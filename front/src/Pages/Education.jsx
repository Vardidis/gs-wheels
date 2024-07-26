import React from "react";
import { useParams } from "react-router-dom";
import FullCustom from "../Components/Services/FullCustom";
import Basics from '../Components/Services/Basics';
import Interior from '../Components/Services/Interior';
import LifeCoaching from '../Components/Services/LifeCoaching';
import FuncRepair from "../Components/Services/FuncRepair";

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