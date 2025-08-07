const path = require("path");

const express = require("express");

<<<<<<< HEAD
const adminController = require("../controllers/admin");
=======
const adminController = require('../controllers/admin');
>>>>>>> 3d745db (load product data)

const router = express.Router();

// /admin/add-product => GET
<<<<<<< HEAD
router.get("/add-product", adminController.getAddProduct);

router.get("/products", adminController.getProducts);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);
=======
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);
>>>>>>> 3d745db (load product data)

module.exports = router;
