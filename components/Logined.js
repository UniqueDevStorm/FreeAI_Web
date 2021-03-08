import React from "react";
import { Button } from "semantic-ui-react";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';

export default function Logined(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div style={{ right: 15, top: 15, position: "absolute" }}>
            <img src={`https://cdn.discordapp.com/avatars/${(props.data).id}/${(props.data).avatar}.png`} style={{ borderRadius: '50%' }} onClick={handleClick} />
            <Menu
                id='fade-menu'
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem>{`${(props.data.username).slice(0, 10)}#${props.data.discriminator}`}</MenuItem>
                <MenuItem onClick={handleClose}>MyPage</MenuItem>
                <MenuItem style={{ backgroundColor: 'red' }} onClick={() => {
                    window.location.replace('/api/discord/logout')
                }}>Logout</MenuItem>
            </Menu>
        </div>
    )
}