import React from "react";

const CanvasImage = (props) => {
    return(
        <>
            <img src={props.image} alt='' style={{
                width: '50px',
                borderRadius: 50,
                position: 'absolute',
                transform: 'translate(-50%, -50%)',
                left: `${props.left}`,
                top: `${props.top}`,
                zIndex: 2,
                cursor: 'pointer',
                rotate: `${props.rotate}`,
                border: '1px solid blue'
            }}
            className='canvas-part'/>
        </>
    );
}

export default CanvasImage;