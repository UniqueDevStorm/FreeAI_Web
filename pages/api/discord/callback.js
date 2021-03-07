import * as process from "process";

export default async (req, res) => {
    const DISCORD_API_ENDPOINT = 'https://discord.com/api/v8'
    const code = req.query.code;
    const params = new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        code,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: 'http://localhost:3000/',
        grant_type: 'authorization_code',
        scope: 'identify email guilds'
    })
    const request = (await (await fetch(`${DISCORD_API_ENDPOINT}/oauth2/token`, {
        method: 'POST',
        body: params,
        headers: { 'Content-Type' : 'application/json' }
    })).json())
    res.send(request)
}