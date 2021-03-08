import {IconButton, Toolbar} from "@material-ui/core";
import Brightness7 from "@material-ui/icons/Brightness7";
import React from "react";

export default function DarkToggle(props) {
    return (
        <div style={{ position: 'fixed', left: 0, top: 0, outline: 'none' }}>
            <Toolbar>
                <div style={{ flexGrow: 1 }}>
                    <IconButton color='inherit' onClick={() => {
                        const value = !props.isDarkMode;
                        props.setIsDarkMode(value);
                        if (value) {
                            localStorage.dark = '1';
                        } else {
                            delete localStorage.dark;
                        }
                    }} >
                        <Brightness7 />
                    </IconButton>
                </div>
            </Toolbar>
        </div>
    )
}