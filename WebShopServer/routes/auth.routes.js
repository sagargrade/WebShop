const express = require("express");

const authControllers = require("../controllers/auth.controllers");

const router = express.Router();

router.get("/signup", authControllers.getSignUp);

router.post("/signup", authControllers.signup);

router.get("/login", authControllers.getLogin);

module.exports = router;
