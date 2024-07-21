import React, { useState } from "react";
import { Stack, Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const ProductTopRow = () => {
    const [view, setView] = useState('list');

    const handleChange = (event, nextView) => {
        setView(nextView);
    };

    return(
        <Stack direction='row' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>   
            <Typography fontSize={26} fontWeight={600}>Κατάστημα</Typography>           
            <ToggleButtonGroup
                size="small"
                value={view}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="list" aria-label="list">
                    <ViewListIcon />
                </ToggleButton>
                <ToggleButton value="module" aria-label="module">
                    <ViewModuleIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    );
}

export default ProductTopRow;