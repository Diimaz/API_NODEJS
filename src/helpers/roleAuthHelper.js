const generateToken = require('./generateToken');
const authService = require('../services/authService');
const rolService = require('../services/rolservice');


const checkRoleAuth = (roles) => async (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ').pop();
        const tokenData = await generateToken.verifyToken(token);
        const userData = await authService.searchById(tokenData.idUsuario);
        const rol = await rolService.searchByIdRol(userData.idRol);

        if([].concat(roles).includes(rol.rol)){
            next()
        }else{
            res.status(409).send({error: 'No tienes permisos'});
        }

    }catch (e) {
        res.status(409).send({error: 'Error'});
    }
}

module.exports = {
    checkRoleAuth
}