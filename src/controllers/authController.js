const authService = require("../services/authService");
const bcryptEncrypt = require('../helpers/bcryptHelper');
const generateToken = require('../helpers/generateToken');
const parseDate = require ('../helpers/parseDate');

const login = async (req,res) =>{
    const {body} = req;
    if(!body.username || !body.password){
        res.status(200).send({data:'Datos no completos'});
        return;
    }
    const usuario = await authService.searchByUsername(body.username);
    if(!usuario){
        res.status(200).send({data:'Usuario no encontrado'});
        return;
    }

    const checkPassword = await bcryptEncrypt.compare(body.password,usuario.password);

    const tokenSession = await generateToken.tokenSign(usuario);

    if(!checkPassword){
        res.status(200).send({data:'Password incorrecta'});
        return;
    }else{
        const date_create = usuario.date_create;
        const date_update = usuario.date_update;

        usuario.date_create = parseDate.parsearDates(date_create);
        usuario.date_update = parseDate.parsearDates(date_update);
        res.status(200).send({data : usuario, tokenSession: tokenSession});
    }
}

const register = async (req, res) =>{
    const {body} = req;
    const passwordHash = await bcryptEncrypt.encrypt(body.password);

    const data = {
        username: body.username,
        password: passwordHash,
    };

    if(!body.username || !body.password){
        res.status(200).send({data:'Datos no completos'});
        return;
    }

    const createUsuario = await authService.createNewUsuario(data);
    const usuario = await authService.searchById(createUsuario);
    const date_create = usuario.date_create;
    const date_update = usuario.date_update;

    usuario.date_create = parseDate.parsearDates(date_create);
    usuario.date_update = parseDate.parsearDates(date_update);
    res.status(200).send({usuario});
}

module.exports = {
    login,
    register
}