import mysql from "mysql2";
  
// create the connection to database
const db = mysql.createConnection({
  host: '10.113.111.82',
  user: 'skiep',
  password: 'Upapit25',
  database: 'dbAmazon'
});

export default db;