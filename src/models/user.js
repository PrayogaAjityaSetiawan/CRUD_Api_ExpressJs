const dbPool = require("../config/database")
// READ
const getAllUser = () => {
    const SQLQuery = "SELECT * FROM user"
    return dbPool.execute(SQLQuery)
}

// CREATE
const createNewUser =(body) => {
    const SQLQuery =    `INSERT INTO user (nama, email, alamat) 
                        VALUES ('${body.nama}', '${body.email}', '${body.alamat}');`
    return dbPool.execute(SQLQuery);
}

// UPDATE
const updateUser = (body, id) => {
    const SQLQuery = `  UPDATE user 
                        SET nama = '${body.nama}', email = '${body.email}', alamat = '${body.alamat}' 
                        WHERE id = ${id};`
    return dbPool.execute(SQLQuery);
}

// DELETE
const deleteUser = (id) => {
    const SQLQuery = `DELETE FROM user WHERE id = ${id};`
    return dbPool.execute(SQLQuery);    
}

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser
}
