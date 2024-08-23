import React, { useState } from "react";
import { Menu, MenuItem, Button, Box } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Flag from "react-world-flags"; 

const languages = [
    { code: "en", name: "English", flag: "gb" },
    { code: "fr", name: "Français", flag: "fr" },
    { code: "es", name: "Español", flag: "es" },
];

const LanguageDropdown = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        setAnchorEl(null);
    };

    return (
        <Box>
            <Button
                onClick={handleClick}
                sx={{
                    color: "white",
                    textTransform: "none",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <KeyboardArrowDownIcon sx={{ marginLeft: 1 }} />
                <Flag code={selectedLanguage.flag} style={{ width: 20, marginRight: 8 }} />
                {selectedLanguage.name}
                
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: '#000', // Set the background color of the dropdown to black
                        color: 'white', // Set the text color to white
                        border:"1px solid #B48F50",
                        borderRadius:'10px',
                    },
                }}
            >
                {languages.map((language) => (
                    <MenuItem
                        key={language.code}
                        onClick={() => handleLanguageChange(language)}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            fontSize: { lg: "20px", md: "16px" },   
                            "&:hover":{
                                backgroundColor:"#B48F50",
                                color:"#000"
                            }
                        }}
                    >
                        <Flag code={language.flag} style={{ width: 20, marginRight: 8 }} />
                        {language.name}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default LanguageDropdown;
