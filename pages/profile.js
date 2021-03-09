import cookie from 'cookie';
import jwt from 'jsonwebtoken';
import * as process from "process";
import ProfileImage from "../components/ProfileImage";
import DataLoader from 'dataloader';

export async function getServerSideProps(ctx) {
    let key = null;
    try {
        const cookies = cookie.parse(ctx.req.headers.cookie);
        const user = cookies.user;
        key = jwt.verify(user, process.env.JWT_SECRET)
    } catch { key = null }
    return {
        props: { user: key }
    }
}

export default function App({ ...key }) {
    const data = key.user;
    return (
        <div style={{ textAlign: "center", marginRight: '30vh', marginTop: '20vh' }}>
            <ProfileImage data={data} style={{ width: 200, height: 200, borderRadius: '50%' }} />
            {
                data.username > 10
                ? <h1>{(data.username).slice(0, 10)}..#{data.discriminator}</h1>
                : <h1>{data.username}#{data.discriminator}</h1>
            }
        </div>
    )
}