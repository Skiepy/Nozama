// import connection
import db from "../config/database.js";

// Get All Products
export const getProducts = (result) => {
    db.query("SELECT * FROM dbamazon.products", (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Get Single Product
export const getProductById = (id, result) => {
    db.query("SELECT * FROM dbamazon.products WHERE id_product = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });
}

// Insert Product to Database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO dbamazon.products SET ?", [data], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Update Product to Database
export const updateProductById = (data, id, result) => {
    db.query("UPDATE dbamazon.products SET name_product = ?, description_product = ?, price_product = ? WHERE id_product = ?", [data.name_product, data.description_product, data.description_product, id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}

// Delete Product to Database
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM dbamazon.products WHERE id_product = ?", [id], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });
}