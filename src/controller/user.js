const userModel = require('../models/user')

// READ
const getAllUser = async (req, res) => {
    try {
        const [data] = await userModel.getAllUser();
        res.json({
            message: "Berhasil Mengambil Data User",
            data : data
        })     
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: "error", error
        })
    }
}

// CREATE
const createNewUser = async (req, res)=> {
    const {body} = req;

    if (!body.nama || !body.email || !body.alamat) {
        return res.status(400).json({
            message: "Bad Request",
            error: "data tidak boleh ada yang kosong",
            data : null
        })
    }

    try {
        await userModel.createNewUser(body)
        res.json({
            message: "Berhasil Menambahkan User",
            data : req.body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: "error", error
        })
    }
}

// UPDATE
const updateUser = async (req, res) => {
    const {id} = req.params;
    try { 
        const {body} = req;
        await userModel.updateUser(body, id);
        res.status(201).json({
            message: "Berhasil Mengupdate User",
            data : {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: "error", error
        })
    }
}

// DELETE
const deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        await userModel.deleteUser(id);
        res.json({
            message: "Berhasil Menghapus User",
            data : null
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: "error", error
        })
    }
}

module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser
}