const dotenv = require('dotenv')

dotenv.config()
const JWT = require('jsonwebtoken')

const authenticate_token = (req, res, next)=>{
    //get authorization via http request
    const auth_header =req.headers['authorization']
    //authorization includes two parts
    const auth_type = auth_header && auth_header.split(' ')[0]
    const auth_token = auth_header && auth_header.split(' ')[1]
    if(!auth_header || !auth_token) return res.sendStatus(401)
    if(auth_type === 'Bearer'){
        JWT.verify(auth_token, process.env.ACCESS_SECRET, (err, user) =>{
            if(err) return res.sendStatus(403)
            req.user = user
            next();
        })
    }
}
module.exports = {authenticate_token}