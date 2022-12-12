// Import function from Basket Model
import { getBasket, getBasketById, insertBasket, updateBasketById, deleteBasketById } from "../models/basketModel.js";

// Get All Basket
export const showBasket = (req, res) => {
    getBasket((err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Get Single Basket 
export const showBasketById = (req, res) => {
    getBasketById(req.params.id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Create New Basket
export const createBasket = (req, res) => {
    const data = req.body;
    insertBasket(data, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Update Basket
export const updateBasket = (req, res) => {
    const data = req.body;
    const id = req.params.id;
    updateBasketById(data, id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}

// Delete Basket
export const deleteBasket = (req, res) => {
    const id = req.params.id;
    deleteBasketById(id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.json(results);
        }
    });
}