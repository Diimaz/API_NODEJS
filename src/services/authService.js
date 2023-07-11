const usuarioModel = require('../models/usuarioModel');

const createNewUsuario = (data) => {
    const createUsuario = usuarioModel.createNewUsuario(data);
    return createUsuario;
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
    createNewUsuario,
    searchById,
    searchByUsername
}