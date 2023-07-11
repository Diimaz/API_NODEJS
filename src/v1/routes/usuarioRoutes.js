const express = require("express");
const router = express.Router();
const usuarioController = require('../../controllers/usuarioController');
const checkAuth = require('../../helpers/authHelper');
const checkRoleAuth = require('../../helpers/roleAuthHelper');

router
    //.get('/',checkAuth.checkAuth,checkRoleAuth.checkRoleAuth(['Admin']),usuarioController.getAllUsuarios)
    .get('/',usuarioController.getAllUsuarios)
    .get('/:idUsuario', usuarioController.getOneUsuario)
    .post('/', usuarioController.createNewUsuario)
    .patch('/:idUsuario', usuarioController.updateOneUsuario)
    .delete('/:idUsuario', usuarioController.deleteOneUsuario);

module.exports = router;