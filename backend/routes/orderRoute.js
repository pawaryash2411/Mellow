const express = require('express');
const { newOrder, getSingleOrder, loggedInUserOrder, getAllOrder, updateOrder, deleteOrder } = require('../controllers/orderController');
const router = express.Router();
const { AuthenticateTheUser, AuthorizedPerson } = require('../middleware/AuthenticateTheUser');

router.route("/order/new").post(AuthenticateTheUser, newOrder);
router.route("/order/:id").get(AuthenticateTheUser, getSingleOrder); //yeh kam nhi kr rha h
router.route("/orders/me").get(AuthenticateTheUser, loggedInUserOrder);
router.route("/admin/orders").get(AuthenticateTheUser, AuthorizedPerson("admin"), getAllOrder);
router.route("/admin/orders/:id").put(AuthenticateTheUser, AuthorizedPerson("admin"), updateOrder).delete(AuthenticateTheUser, AuthorizedPerson("admin"), deleteOrder);

module.exports = router; 