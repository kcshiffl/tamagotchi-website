import React, { useState } from 'react';
import { IoIosSunny , IoIosMoon} from "react-icons/io";

// Create your functional component:
export default function ThemeButton() {
    // Light vs Dark Mode
    const [darkMode, setDarkMode] = useState(false)

    function switchTheme() {
        setDarkMode(!darkMode)
        if (darkMode) {
          document.body.style.backgroundColor = "black"
          document.body.style.color = "white"
        } else {
          document.body.style.backgroundColor = "white"
          document.body.style.color = "black"
        }
      }

    return (
        <button 
          style = {{backgroundColor: 'transparent', position: 'absolute'}}
          onClick={() => switchTheme()}>
            {darkMode ? 
            <IoIosSunny style={{color: 'black', width: '50%', height: '50%'}} /> : 
            <IoIosMoon style={{color: 'white', width: '50%', height: '50%'}} />}
        </button>
    )
}