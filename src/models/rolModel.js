const db = require('./db');

const searchByIdRol = (idRol) => {
    return new Promise((resolve, reject) => {
        db.connection.query(`select * from tbl_roles where idRol = ${idRol}`,(err,rol,fields) => {
            if(err) throw err;
            resolve(rol[0]);
        });
    });
}

module.exports = {
    searchByIdRol
}