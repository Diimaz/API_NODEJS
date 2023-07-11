const db = require('./db');

const getAllUsuarios = () => {
    return new Promise((resolve, reject) => {
        db.connection.query(`SELECT * from tbl_usuarios`,(err, usuarios, fields) => {
            if (err) throw err;
            resolve(usuarios);
        });
    });
}

const getOneUsuario = (idUsuario) => {
    const fecha = getFecha();
    console.log(fecha);
    return new Promise((resolve, reject) => {
        db.connection.query(`select * from tbl_usuarios where idUsuario = ${idUsuario}`,(err,usuario,fields) => {
            if(err) throw err;
            resolve(usuario[0]);
        });
    });
}

const createNewUsuario = (data) => {
    const fecha = getFecha();
    const idRol = 2;
    return new Promise((resolve, reject) => {
        db.connection.query(`insert into tbl_usuarios (username, password,date_create,date_update,idRol) values ('${data.username}','${data.password}','${fecha}','${fecha}',${idRol})`,(err,usuario,fields) => {
            if(err) throw err;
            resolve(usuario.insertId);
        });
    });
}

const updateOneUsuario = (data, idUsuario) => {
    const fecha = getFecha();
    const idRol = 2;
    console.log(fecha);
    return new Promise((resolve, reject) => {
        db.connection.query(`update tbl_usuarios set username = '${data.username}', password = '${data.password}',date_update = '${fecha}',idRol=${idRol} where idUsuario=${idUsuario}`,(err,usuario,fields) => {
            if(err) throw err;
            resolve(usuario);
        });
    });
}

const deleteOneUsuario = (idUsuario) => {
    return new Promise((resolve, reject) => {
        db.connection.query(`delete from tbl_usuarios where idUsuario = ${idUsuario}`,(err,usuario,fields) => {
            if(err) throw err;
            resolve(usuario);
        });
    });
}

const searchById = (idUsuario) => {
    return new Promise((resolve, reject) => {
        db.connection.query(`select * from tbl_usuarios where idUsuario = ${idUsuario}`,(err,usuario,fields) => {
            if(err) throw err;
            resolve(usuario[0]);
        });
    });
}

const searchByUsername = (username) => {
    return new Promise((resolve, reject) => {
        db.connection.query(`select * from tbl_usuarios where username = '${username}'`,(err,usuario,fields) => {
            if(err) throw err;
            resolve(usuario[0]);
        });
    });
}

const getFecha = () => {
    const mostrar = new Date();
    const meses = ['01','02','03','04','05','06','07','08','09','10','11','12'];
    const dias = ['00','01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
    const fecha = `${mostrar.getFullYear()}-${meses[mostrar.getMonth()]}-${dias[mostrar.getDate()]} ${mostrar.toLocaleTimeString()}.${mostrar.getMilliseconds()}`;
    return fecha;
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