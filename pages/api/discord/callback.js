import * as process from "process";
import jwt from 'jsonwebtoken';
import Cookies from 'cookies';

export default async (req, res) => {
    const DISCORD_API_ENDPOINT = 'https://discord.com/api/v8'
    const REDIRECT_URI = 'http://localhost:3000/api/discord/callback'
    const code = req.query.code;
    const params = new URLSearchParams({
        client_id: process.env.CLIENT_ID,
        code,
        client_secret: process.env.CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
        scope: 'identify email guilds'
    })
    const request = (await (await fetch(`${DISCORD_API_ENDPOINT}/oauth2/token`, {
        method: 'POST',
        body: params,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })).json())
    const token = request.access_token
    const type = request.token_type
    const userinfo = (await (await fetch(`${DISCORD_API_ENDPOINT}/users/@me`, {
        method: 'GET',
        headers: {
            Authorization: `${type} ${token}`
        }
    })).json())
    const guildinfo = (await (await fetch(`${DISCORD_API_ENDPOINT}/users/@me/guilds`, {
        method: 'GET',
        headers: {
            Authorization: `${type} ${token}`
        }
    })).json())
    const user = jwt.sign(userinfo, process.env.JWT_SECRET);
    const cookies = new Cookies(req, res);
    cookies.set('user', user, {
        httpOnly: false
    })
    res.redirect('../../')
}