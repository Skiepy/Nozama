// import connection
import db from "../config/database.js";

// Get All Basket item
export const getBasket = (result) => {
    db.query("SELECT * FROM dbamazon.basket", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get Single Basket item
export const getBasketById = (id, result) => {
    db.query("SELECT * FROM dbamazon.basket WHERE sessionId_basket = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert basket item to Database
export const insertBasket = (data, result) => {
    db.query("INSERT INTO dbamazon.basket SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update Basket to Database
export const updateBasketById = (data, id, result) => {
    db.query("UPDATE dbamazon.basket SET id_product = ?, sessionId_basket = ?, productPrice_basket = ? WHERE id_basket = ?", [data.id_product, data.sessionId_basket, data.productPrice_basket, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete Basket item to Database
export const deleteBasketById = (id, result) => {
    db.query("DELETE FROM dbamazon.basket WHERE id_basket = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

export const deleteBasketBySessionId = (id, result) => {
    db.query("DELETE FROM dbamazon.basket WHERE sessionId_basket = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}