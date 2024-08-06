var jwt = require("jsonwebtoken");
require('dotenv').config();
var JWT_SECRET = "ride-sharing"


const fetchUser = (req, res, next)=>{
    var token = req.header("auth-token");
    if(!token){
        res.status(401).send({error : "Please login with correct credentials."});
    }
    try{
        const data = jwt.verify(token,JWT_SECRET);
        req.user = data.user;
        next();
    }
    catch(error){
        res.status(401).send({error : "Please login with correct credentials."});
    }
   
}

module.exports = fetchUser;