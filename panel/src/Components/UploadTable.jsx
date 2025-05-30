import React, { useContext } from "react";
import { ImageList, ImageListItem } from '@mui/material';
import { Context } from "./Context";

const UploadTable = (props) => {
    const {allImages, isDesktop} = useContext(Context);

    const handleImageClick = (filename) => {
        props.setItem(filename)
    };

    return(                            
        <ImageList
            cols={isDesktop ? 3 : 2}            
            gap={8}  
            sx={{
                maxHeight: 'calc(100vh - 124px)',
            }}                    
        >
            {allImages.map((image, index) => {
                return(
                    <ImageListItem
                        key={index}
                        onClick={() => handleImageClick(image.originalName)}
                        sx={{
                            cursor: 'pointer',                            
                            border: props.item === image.originalName ? '1px solid orangered' : '1px solid #eeeeee',                                                     
                            borderRadius: 3,
                            overflow: 'hidden',                          
                            objectFit: 'cover'
                        }}
                    >
                        <img
                            srcSet={image.url}
                            src={image.url}
                            alt={image.originalName}
                            loading="lazy"
                            style={{
                                height: 248
                            }}
                        />
                    </ImageListItem>
                )
            })}
        </ImageList>
    );
}

export default UploadTable;