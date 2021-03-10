import * as process from "process";

export default (req, res) => {
    res.redirect(`https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.HOST}/api/discord/callback&response_type=code&scope=identify%20email%20guilds`)
}