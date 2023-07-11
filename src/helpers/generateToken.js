require('dotenv-safe').config();
const jwt = require('jsonwebtoken');

const tokenSign = async (usuario) => {
    return jwt.sign(
        {
            idUsuario: usuario.idUsuario,
            idRol: usuario.idRol
        },
        process.env.JWT_SECRET, {
            expiresIn: "2h"
        }
    );
}

const verifyToken = async (token) => {
    try{
        return jwt.verify(token,process.env.JWT_SECRET);
    }catch (e){
        return null;
    }
}

const decodeSign = async (token) => {

}

module.exports = {
    tokenSign,
    verifyToken,
    decodeSign
}