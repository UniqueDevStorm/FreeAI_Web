import process from "process";

export default (req, res) => {
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fdiscord%2Fcallback&response_type=code&scope=identify%20email%20guilds`)
}