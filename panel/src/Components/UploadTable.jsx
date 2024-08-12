import React, { useContext } from "react";
import { Paper, ImageList, ImageListItem } from '@mui/material';
import { Context } from "./Context";

const UploadTable = () => {
    const {endpoint, allImages} = useContext(Context);

    return(                            
        <ImageList sx={{ width: 500, height: 450, padding: 3 }} cols={3} rowHeight={164}>
            {allImages.map((image, index) => {
                return(
                    <ImageListItem key={index} sx={{ cursor: 'pointer', borderRadius: 2 }}>
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