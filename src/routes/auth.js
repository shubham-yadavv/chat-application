const {
    login,
    register,
    getAllUsers,
    logOut,
} = require("../controllers/user.controller");

const router = require("express").Router();

router.post("/login", login);
router.post("/register", register);
router.get("/users/:id", getAllUsers);
router.get("/logout/:id", logOut);

module.exports = router;
