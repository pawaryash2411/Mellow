const express = require("express");
const router = express.Router();
const { AuthenticateTheUser } = require('../middleware/AuthenticateTheUser');
const { processPayment, sendStripeApiKey } = require("../controllers/paymentControllers");

router.route("/payment/process").post(AuthenticateTheUser, processPayment)
router.route("/payment/stripeapikey").get(AuthenticateTheUser, sendStripeApiKey)
module.exports = router;