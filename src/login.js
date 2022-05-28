const JWT = require('jsonwebtoken')

const login = (req, res) =>{
  const username = req.body.username
  const user = {name:username}
  const accessToken = JWT.sign(
      user,
      process.env.ACCESS_SECRET
  )

  res.json({accessToken})
}
module.exports = {login}