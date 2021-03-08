import Cookies from 'cookies'

export default (req, res) => {
    const cookie = Cookies(req, res)
    cookie.set('user', null)
    res.redirect('/')
}