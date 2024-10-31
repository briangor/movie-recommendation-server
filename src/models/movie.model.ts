// Defines the structure of the Movie entity and database schema

import { dbConfig } from "../config/db.config";
// import mysql from 'mysql2/promise';
import mysql from 'mysql2';

export const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE,
}).promise()

export interface Movie {
    id?: number;
    title: string;
    genre: string;
    releaseDate: Date;
}

// TODO: Using a pool vs this
/* export const pool = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE,
}); */

// Also check these
/* mysql.createConnection
mysql.createPool
mysql.createPoolCluster
mysql.createServer */