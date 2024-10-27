import mysql from "mysql2";
// import { dbConfig } from '../config/db.config.js';

//todo: check use of pool
// Create a connection to the database
/* const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
}); */
const connection = mysql.createConnection({
    host: 'host',
    user: 'user',
    password: 'pwd',
    database: 'db',
  });

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
}); 

export default connection;