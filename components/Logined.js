import React from "react";

export default function Logined(props) {
    const [open, setOpen] = React.useState(false);
    return (
        <div>
            <img src={`https://cdn.discordapp.com/avatars/${(props.data).id}/${(props.data).avatar}.png`} style={{ right: 15, top: 15, position: 'absolute', borderRadius: '50%', height: 100, width: 100 }} onClick={() => {console.log('샌즈')}} />
        </div>
    )
}