const express = require("express");
const router = express.Router();
const userController = require("../controller/user.js")

// CREATE - POST
router.post("/",userController.createNewUser);

// READ - GET
router.get("/",userController.getAllUser);

// UPDATE - PATCH
router.patch("/:id",userController.updateUser);

// DELETE - DELETE
router.delete("/:id", userController.deleteUser)

module.exports = router