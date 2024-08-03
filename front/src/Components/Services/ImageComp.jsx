import React, { useContext } from "react";
import { Context } from "../Context";

const ImageComp = (props) => {
    const {isDesktop} = useContext(Context);
    
    return(
        <>
            {isDesktop
                ? <img src={props.image} alt='' style={{ width: '100%', height: '200px', objectFit: 'cover' }}/>
                : <img src={props.image} alt='' style={{ width: '100%', height: '160px', objectFit: 'cover' }}/>
            }
        </>
    );
}

export default ImageComp;