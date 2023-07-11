const rolService = require ('../models/rolModel');

const searchByIdRol = (idRol) => {
    const rol = rolService.searchByIdRol(idRol);
    return rol;
}

module.exports = {
    searchByIdRol
}