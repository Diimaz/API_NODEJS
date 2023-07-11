const generateToken = require('./generateToken');

const checkAuth = async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await generateToken.verifyToken(token);
        if(tokenData.idUsuario){
            next()
        }else{
            res.status(409).send({error: 'Inicia sesion primero'});
        }
    }catch (e) {
        res.status(409).send({error: 'Inicia sesion primero'});   
    }
}

module.exports = {
    checkAuth
}