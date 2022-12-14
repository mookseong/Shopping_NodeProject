const Product = require("../models/product");

exports.createProduct = (productName, productPrice, productDescription, userId) => Product.create({
    productName, productPrice, productDescription, userId
});

exports.getProduct = (productID) => Product.findOne({
    where: {productID}, attributes: ['productID', 'productName', 'productPrice', 'productDescription']
});

exports.allProduct = () => Product.findAll({});

exports.updateProduct = (productID, productName, productPrice, productDescription) => Product.update({
    productName, productPrice, productDescription
}, {where: {productID}});

exports.deleteProduct = (productID) => Product.destroy({where: {productID}});

