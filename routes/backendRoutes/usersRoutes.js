const express = require("express");
const router = express.Router();

const { createUser, viewUser, updateUser, deleteUser } = require("../../controllers/usersControllers");

router.post("/", createUser);
router.get("/", viewUser);
router.post("/", updateUser);
router.post("/", deleteUser);

module.exports = router;