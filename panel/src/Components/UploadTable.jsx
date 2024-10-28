import React, { useContext } from "react";
import { ImageList, ImageListItem } from '@mui/material';
import { Context } from "./Context";

const UploadTable = (props) => {
    const {allImages} = useContext(Context);

    const handleImageClick = (filename) => {
        props.setItem(filename)
    };

    return(                            
        <ImageList sx={{ width: 500, height: 450, padding: 3 }} cols={3} rowHeight={164}>
            {allImages.map((image, index) => {
                return(
                    <ImageListItem key={index} onClick={() => handleImageClick(image.originalName)} sx={{ cursor: 'pointer', borderRadius: 1, border: props.item === image.originalName ? '2px solid #609cfc' : 'none' }}>
                        <img
                            srcSet={image.url}
                            src={image.url}
                            alt={image.originalName}
                            loading="lazy"
                        />
                    </ImageListItem>
                )
            })}
        </ImageList>
    );
}

export default UploadTable;