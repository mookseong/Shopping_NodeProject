const express = require('express');
const bodyParser = require("body-parser");
const router = express.Router();
const authService = require("../service/auth-service");
const userController = require("../controller/user-controller");
const indexController = require("../controller/index-controller");
const productController = require("../controller/product-controller");
const response = require("../data/ResponseFrom");

router.use(bodyParser.json());


router.get('/user/users', authService.isLoggedIn, authService.isAdminIn, indexController.usersIndex);
router.get('/user/user', authService.isLoggedIn, authService.isAdminIn, userController.findUser);
router.get('/user/:id',authService.isLoggedIn, authService.isAdminIn,  userController.getUser);
router.post('/user/cid',authService.isLoggedIn, authService.isAdminIn,  userController.createUser);
router.post('/user/uid', authService.isLoggedIn, authService.isAdminIn,userController.updateUser);
router.get('/user/did/:id',authService.isLoggedIn, authService.isAdminIn,  userController.deleteUser);
router.get('/product/products',authService.isLoggedIn, authService.isAdminIn,  indexController.productsIndex);
router.get('/product/product', authService.isLoggedIn, authService.isAdminIn, productController.allProduct);
router.get('/product/:id', authService.isLoggedIn, authService.isAdminIn, productController.findProduct);
router.post('/product/cit', authService.isLoggedIn, authService.isAdminIn, productController.createProduct);
router.post('/product/uit', authService.isLoggedIn, authService.isAdminIn, productController.updateProduct);
router.get('/product/dit/:id', authService.isLoggedIn, authService.isAdminIn, productController.deleteProduct)

router.use((req, res, next) => {
    next('Not found error!');
});

router.use((err, req, res, next) => {
    res.status(500).json(response.responseFromData("fail","[admin]에러 발생", err));
});


module.exports = router;