// import connection
import db from "../config/database.js";

// Get All Checkout
export const getCheckout = (result) => {
    db.query("SELECT * FROM dbamazon.checkout", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get Single Checkout
export const getCheckoutById = (id, result) => {
    db.query("SELECT * FROM dbamazon.checkout WHERE id_checkout = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert Checkout to Database
export const insertCheckout = (data, result) => {
    db.query("INSERT INTO dbamazon.checkout SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update Checkout to Database
export const updateCheckoutById = (data, id, result) => {
    db.query("UPDATE dbamazon.checkout SET amount_checkout = ?, status_checkout = ?, sessionId_checkout = ?, nonce_checkout = ?, firstName_checkout = ?, lastName_checkout = ?, email_checkout = ?, phoneNb_checkout = ?, address_checkout = ?, city_checkout = ?, postalCode_checkout = ? WHERE id_checkout = ?", [data.amount_checkout, data.status_checkout, data.sessionId_checkout, data.nonce_checkout , data.firstName_checkout , data.lastName_checkout , data.email_checkout , data.phoneNb_checkout , data.address_checkout, data.city_checkout, data.postalCode_checkout , id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete Checkout to Database
export const deleteCheckoutById = (id, result) => {
    db.query("DELETE FROM dbamazon.checkout WHERE id_checkout = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}