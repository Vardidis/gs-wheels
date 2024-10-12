import React, { useContext } from "react";
import { ImageList, ImageListItem } from '@mui/material';
import { Context } from "./Context";

const UploadTable = (props) => {
    const {endpoint, allImages} = useContext(Context);

    const handleImageClick = (id) => {
        props.setItem(id)
    };

    return(                            
        <ImageList sx={{ width: 500, height: 450, padding: 3 }} cols={3} rowHeight={164}>
            {allImages.map((image, index) => {
                return(
                    <ImageListItem key={index} onClick={() => handleImageClick(index)} sx={{ cursor: 'pointer', borderRadius: 1, border: props.item === index ? '2px solid #609cfc' : 'none' }}>
                        <img
                            srcSet={`${endpoint}${image}`}
                            src={`${endpoint}${image}`}
                            alt=''
                            loading="lazy"
                        />
                    </ImageListItem>
                )
            })}
        </ImageList>
    );
}

export default UploadTable;