import React from "react";
import { useParams } from "react-router-dom";
import Interior from '../Components/Services/Interior';
import LifeCoaching from '../Components/Services/LifeCoaching';
import FuncRepair from "../Components/Services/FuncRepair";

const Education = () => {
    const {service} = useParams();

    if(service === 'apokatastasi'){
        return(
            <FuncRepair/>
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