const express = require('express');
const { getAllProducts, createProduct, updateProducts, deleteProduct, getProductsDetails, createProductReview, getAllProductsReview, deleteReview, searchProduct, getAdminProducts } = require('../controllers/productController');
const { AuthenticateTheUser, AuthorizedPerson } = require('../middleware/AuthenticateTheUser');


const router = express.Router();

// For Getting the Products
router.route("/products").get(getAllProducts);

router.route("/product/:id").get(getProductsDetails);


// For Creating the products by ADMIN
router.route("/product/new").post(AuthenticateTheUser, AuthorizedPerson("admin"), createProduct);

// Get All Products by ADMIN
router.route("/admin/all-products").get(AuthenticateTheUser, AuthorizedPerson("admin"), getAdminProducts);

// Update ,Delete and getting the products details by ADMIN
router.route("/admin/product/:id").put(AuthenticateTheUser, AuthorizedPerson("admin"), updateProducts).delete(AuthenticateTheUser, deleteProduct);

// For Creating the Reviews and Updating Existed Reviews by ADMIN
router.route("/review").put(AuthenticateTheUser, createProductReview);

router.route("/admin/reviews/:id").get(AuthenticateTheUser, AuthorizedPerson("admin"), getAllProductsReview).delete(AuthenticateTheUser, AuthorizedPerson("admin"), deleteReview);

// Search the products
router.route("/product/search/:keyword").get(searchProduct);

module.exports = router;