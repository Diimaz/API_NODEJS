const usuarioModel = require('../models/usuarioModel');

const getAllUsuarios = () => {
    const allUsuarios = usuarioModel.getAllUsuarios();
    return allUsuarios;
}

const getOneUsuario = (idUsuario) => {
    const usuario = usuarioModel.getOneUsuario(idUsuario);
    return usuario;
}

const createNewUsuario = (data) => {
    const createUsuario = usuarioModel.createNewUsuario(data);
    return createUsuario;
}

const updateOneUsuario = (data, idUsuario) => {
    const updatedUsuario = usuarioModel.updateOneUsuario(data,idUsuario);
    return updatedUsuario;
}

const deleteOneUsuario = (idUsuario) => {
    const deleteUsuario = usuarioModel.deleteOneUsuario(idUsuario);
    return deleteUsuario;
}

const searchById = (idUsuario) => {
    const usuario = usuarioModel.searchById(idUsuario);
    return usuario;
}

const searchByUsername = (username) => {
    const usuario = usuarioModel.searchByUsername(username);
    return usuario;
}

module.exports = {
    getAllUsuarios,
    getOneUsuario,
    createNewUsuario,
    updateOneUsuario,
    deleteOneUsuario,
    searchById,
    searchByUsername
};