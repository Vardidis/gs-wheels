import React from "react";

const PlaceBox = (props) => {
    return(
        <div style={{
            height: '20px',
            width: '165px',
            backgroundColor: '#ECECEC',
            display: 'flex',
            gap: '5px',
            padding: '10px',
            fontWeight: 600,
            borderRadius: 3,
            alignItems: 'center',
            boxShadow: '2px 2px 3px -2px black'
        }}>
            {props.icon}
            {props.text}
        </div>
    );
}

export default PlaceBox;