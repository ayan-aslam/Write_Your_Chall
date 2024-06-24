const express = require("express");
const router = express.Router();
const services = require("../controllers/service-controller");
const solutions = require("../controllers/getsolution-controller");
router.route("/service").get(services);
router.route("/chall").get(solutions);

module.exports = router;
