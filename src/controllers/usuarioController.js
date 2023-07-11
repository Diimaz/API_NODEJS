const usuarioService = require("../services/usuarioService");
const bcryptEncrypt = require('../helpers/bcryptHelper');
const {parsearDates} = require('../helpers/parseDate');
const {validate} = require('express-validation');

//Funcion para mostrar todos los usuarios
const getAllUsuarios = async (req,res) => {
    const allUsuarios = await usuarioService.getAllUsuarios();
    allUsuarios.forEach(user => {
        const date_create = user.date_create;
        const date_update = user.date_update;

        user.date_create = parsearDates(date_create);
        user.date_update = parsearDates(date_update); 
    });
    res.send({status: 'Ok', data: allUsuarios});
};

//Funcion para mostrar solo un usuario
const getOneUsuario = async (req,res) => {
    const {
        params: {idUsuario }
    } = req;

    if(!idUsuario){
        return;
    }
    
    const usuario = await usuarioService.getOneUsuario(idUsuario);
    if(!usuario){
        res.status(409).send({data: `No existe un usuario con el id: ${idUsuario}`})
    }else{
        const date_create = usuario.date_create;
        const date_update = usuario.date_update;

        usuario.date_create = parsearDates(date_create);
        usuario.date_update = parsearDates(date_update);
        res.status(200).send({data: usuario})
    }
};

//Funcion para crear un usuario
const createNewUsuario = async (req,res) => {
    const {body} = req;
    const passwordHash = await bcryptEncrypt.encrypt(body.password);

    const data = {
        username: body.username,
        password: passwordHash,
    };

    if(!body.username || !body.password){
        res.status(409).send({data:'Datos no completos'});
        return;
    }

    const createUsuario = await usuarioService.createNewUsuario(data);
    const usuario = await usuarioService.searchById(createUsuario);
    const date_create = usuario.date_create;
    const date_update = usuario.date_update;

    usuario.date_create = parsearDates(date_create);
    usuario.date_update = parsearDates(date_update);
    res.status(200).send({usuario});
};

//Funcion para actualizar un usuario
const updateOneUsuario = async (req,res) => {
    const {body} = req;

    const {
        params: {idUsuario }
    } = req;

    if(!idUsuario){
        res.status(409).send({data:'ID no valido'});
        return;
    }

    const buscarUsuario = await usuarioService.searchById(idUsuario);

    if(!buscarUsuario){
        res.status(409).send({data:'Usuario no valido'});
        return;
    }

    const data = {
        username: body.username,
        password: body.password,
    };

    if(!body.username || !body.password){
        res.status(409).send({data:'Datos no completos'});
        return;
    }

    const updatedUsuario = await usuarioService.updateOneUsuario(data,idUsuario);
    const usuario = await usuarioService.searchById(idUsuario);
    const date_create = usuario.date_create;
    const date_update = usuario.date_update;

    usuario.date_create = parsearDates(date_create);
    usuario.date_update = parsearDates(date_update);

    res.status(200).send({usuario});
};

//Funcion para eliminar un usuario
const deleteOneUsuario = async (req,res) => {
    const {
        params: {idUsuario }
    } = req;

    if(!idUsuario){
        res.status(409).send({data:'ID no valido'});
        return;
    }
    const usuario = await usuarioService.searchById(idUsuario);
    const date_create = usuario.date_create;
    const date_update = usuario.date_update;

    usuario.date_create = parsearDates(date_create);
    usuario.date_update = parsearDates(date_update);
    const deletedUsuario = await usuarioService.deleteOneUsuario(idUsuario);
    res.status(200).send({data: 'Usuario Eliminado', usuario});
};

module.exports = {
    getAllUsuarios,
    getOneUsuario,
    createNewUsuario,
    updateOneUsuario,
    deleteOneUsuario
};