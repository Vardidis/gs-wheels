import React, { useState, useEffect, useContext } from "react";
import { List, ListItem, ListItemText, Box, Divider, Select, MenuItem } from '@mui/material';
import { Context } from "./Context";

const SettingsBox = () => {
    const {setSettings} = useContext(Context);
    const [themeSelect, setThemeSelect] = useState('Ανοιχτό');
    const [lang, setLang] = useState('Ελληνικά');

    const handleTheme = (event) => {
        setThemeSelect(event.target.value);
    };
  
    const handleLang = (event) => {
        setLang(event.target.value);
    };

    useEffect(() => {
        setSettings({
            'theme': themeSelect,
            'lang': lang,
        })
    }, [themeSelect, lang]);

    return(
        <Box sx={{backgroundColor: 'theme.light' }}>
            <List>
                <ListItem>
                    <ListItemText primary='Θέμα'/>
                    <Select
                        value={themeSelect}
                        label="Θέμα"
                        onChange={handleTheme}
                        sx={{ height: '40px' }}                        
                    >
                        <MenuItem value={1}>Ανοιχτό</MenuItem>
                        <MenuItem value={2}>Σκούρο</MenuItem>
                    </Select>                                                                   
                </ListItem>
                <Divider/>
                <ListItem>
                    <ListItemText primary='Γλώσσα'/>   
                    <Select
                        value={lang}
                        label="Γλώσσα"
                        onChange={handleLang}
                        sx={{ height: '40px' }}
                    >
                        <MenuItem value={1}>Ελληνικά</MenuItem>
                        <MenuItem value={2}>Αγγλικά</MenuItem>
                    </Select>                           
                </ListItem>
            </List>
        </Box>
    );
}

export default SettingsBox;