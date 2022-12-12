// Import function from Checkout Model
import { getCheckout, getCheckoutById, insertCheckout, updateCheckoutById, deleteCheckoutById } from "../models/checkoutModel";

// Get All Checkout
export const showCheckout = (req, res) => {
    getCheckout((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Single Checkout 
export const showCheckoutById = (req, res) => {
    getCheckoutById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Create New Checkout
export const createCheckout = (req, res) => {
    const data = req.body;
    insertCheckout(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update Checkout
export const updateCheckout = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateCheckoutById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Delete Checkout
export const deleteCheckout = (req, res) => {
    const id = req.params.id;
    deleteCheckoutById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}