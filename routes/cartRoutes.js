const express = require('express');

// Middlewares
 const { carttExists } = require('../middlewares/cartMiddlewares')
 const { protectToken } = require('../middlewares/userMiddlewares')

// Controller

const {
addPoductToCart,
updateProductToCart,
deleteProductToCart,
purchaseProductToCart
} = require('../controllers/cartController')



const router = express.Router();

router.use(protectToken);



router.post('/add-product', addPoductToCart);
 router.patch('/update-cart',updateProductToCart)
 router.post('/purchase',purchaseProductToCart); 
 
 router.delete('/:productId', deleteProductToCart);

  

module.exports = { cartRouter: router };
