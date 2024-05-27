const express = require("express");
const { createOrder } = require("../controllers/ordercontrol");

const router = express.Router();

router.route("/order").post(createOrder);

module.exports = router;
