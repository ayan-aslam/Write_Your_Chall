const express = require("express");
const router = express.Router();
const authcontrollers = require('../controllers/auth-controller.js');
const signupSchema = require('../validators/auth-validator.js');
const loginSchema = require('../validators/auth-validator2.js')
const validate = require("../middlewares/validate-middleware.js")
const authMiddleware = require("../middlewares/auth-middleware.js")
router.route('/').get(authcontrollers.home);

router.route('/register').post(validate(signupSchema),authcontrollers.register);

router.route('/login').post(validate(loginSchema),authcontrollers.login);

router.route("/user").get(authMiddleware,authcontrollers.user);

module.exports = router;
