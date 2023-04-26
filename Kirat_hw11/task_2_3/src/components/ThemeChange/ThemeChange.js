import React, { useState } from "react";
import { ContextTheme } from "../../context-api/ContextTheme";

const ThemeChange = ({ children }) => {

    const [isDarkTheme, setIsLightTheme] = useState(true);    
    const ThemeColor = isDarkTheme ? 'darkTheme' : 'lightTheme';
    const handleTheme = () => setIsLightTheme(!isDarkTheme);

    const theme = {
        isDarkTheme,
        ThemeColor,
        handleTheme        
    }

    return (
        <ContextTheme.Provider value={theme}>
            { children }
        </ContextTheme.Provider>
    );
};

export default ThemeChange;