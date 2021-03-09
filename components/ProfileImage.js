export default function ProfileImage(props) {
    return (
        <img
            src={`https://cdn.discordapp.com/avatars/${(props.data).id}/${(props.data).avatar}.png`}
            style={props.style}
        />
    )
}