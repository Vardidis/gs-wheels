import { React, useEffect, useState } from "react";

const Test = () => {
    const [imageList, setImageList] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:4300/products")
        .then(((response) => response.json()))
        .then((data) => {
            setImageList(data);
        })
    }, []);

    return(
        <>   
            {imageList.map((image, i) => {
                return <img
                    key={i}
                    src={image.data}
                    alt=""
                    style={{ width: '200px', height: 'auto', margin: '10px' }}
                />
            })}
        </>
    )
    ;
}

export default Test;