// import express
import express from "express";

// import function from controller
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";
import { showBasket, showBasketById, createBasket, updateBasket, deleteBasket } from "../controllers/basket.js";
import { showCheckout, showCheckoutById, createCheckout, updateCheckout, deleteCheckout } from "../controllers/checkout.js";

// init express router
const router = express.Router();

// Product
// Get All Product
router.get('/products', showProducts);

// Get Single Product
router.get('/products/:id', showProductById);

// Create New Product
router.post('/products', createProduct);

// Update Product
router.put('/products/:id', updateProduct);

// Delete Product
router.delete('/products/:id', deleteProduct);


// Basket
// Get All Basket
router.get('/basket', showBasket);

// Get Single Basket
router.get('/basket/:id', showBasketById);

// Create New Basket
router.post('/basket', createBasket);

// Update Basket
router.put('/basket/:id', updateBasket);

// Delete Basket
router.delete('/basket/:id', deleteBasket);


// Checkout
// Get All Checkout
router.get('/checkout', showCheckout);

// Get Single Checkout
router.get('/checkout/:id', showCheckoutById);

// Create New Checkout
router.post('/checkout', createCheckout);

// Update Checkout
router.put('/checkout/:id', updateCheckout);

// Delete Checkout
router.delete('/checkout/:id', deleteCheckout);


// export default router
export default router;