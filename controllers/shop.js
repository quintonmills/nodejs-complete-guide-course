<<<<<<< HEAD
const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
=======
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
>>>>>>> 3d745db (load product data)
    });
  });
};

<<<<<<< HEAD
exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
=======
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    console.log(product);
  });
  res.redirect('/');
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
>>>>>>> 3d745db (load product data)
    });
  });
};

exports.getCart = (req, res, next) => {
<<<<<<< HEAD
  res.render("shop/cart", {
    path: "/cart",
    pageTite: "Your Cart",
=======
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
>>>>>>> 3d745db (load product data)
  });
};

exports.getOrders = (req, res, next) => {
<<<<<<< HEAD
  res.render("shop/orders", {
    path: "/orders",
    pageTite: "Your Orders",
  });
};

exports.getCheckout = (req, res, request) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout",
=======
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
>>>>>>> 3d745db (load product data)
  });
};
