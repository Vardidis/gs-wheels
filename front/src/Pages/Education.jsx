import React from "react";
import { useParams } from "react-router-dom";
import Interior from '../Components/Services/Interior';
import LifeCoaching from '../Components/Services/LifeCoaching';
import Training from "../Components/Services/Training";
import FuncBasic from "../Components/Services/FuncBasic";

const Education = () => {
    const {service} = useParams();

    if(service === 'apokatastasi'){
        return(
            <FuncBasic/>
        );
    }else if(service === 'education'){
        return(
            <Training/>
        );
    }else if(service === 'life-coaching'){
        return(
            <LifeCoaching/>
        );
    }else if(service === 'interior-design'){
        return(
            <Interior/>
        );
    }
    
}

export default Education;