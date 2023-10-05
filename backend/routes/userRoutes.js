const express = require("express");
const { registerUser, loginUser, logOut, forgetPassword, getUserDetails, updatePassword, updateProfile, getAllUsers, getAUsers, updateUser, DeleteUsers } = require("../controllers/userController");
const { AuthenticateTheUser, AuthorizedPerson } = require("../middleware/AuthenticateTheUser");
const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logOut);
router.route('/password/forget').post(forgetPassword);
router.route('/me').get(AuthenticateTheUser, getUserDetails);
router.route('/password/update').put(AuthenticateTheUser, updatePassword);
router.route('/me/update').put(AuthenticateTheUser, updateProfile);
router.route('/admin/user').get(AuthenticateTheUser, AuthorizedPerson("admin"), getAllUsers);
router.route('/admin/user/:id').get(AuthenticateTheUser, AuthorizedPerson("admin"), getAUsers).put(AuthenticateTheUser, AuthorizedPerson("admin"),updateUser).delete(AuthenticateTheUser, AuthorizedPerson("admin"),DeleteUsers);


module.exports = router;