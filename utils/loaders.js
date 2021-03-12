import DataLoader from 'dataloader';

export function createLoaders(token) {
    return {
        discord: {
            guilds: new DataLoader(() => fetch(`https://discord.com/api/users/@me/guilds`, {headers: {Authorization: `Bearer ${token}`}}).then(res=>res.json()))
        }
    }
}

export const loaders = new Map();