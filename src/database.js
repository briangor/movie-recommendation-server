import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()

const pool = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DATABASE
}).promise()

// GET all genres
export async function getGenres() {

    const query = ` `
    const [rows] = await pool.query(query)
    return rows;
}

// GET single genre by ID
export async function getGenre(id) {
    const query = ` `

    const [rows] = await pool.query(query, [id])
    let data = rows;
    // return data;
    return data.length > 0 ? data[0] : []; // Return the single genre or null/[] if not found
}

// CREATE genre
export async function createGenre() {
    const [result] = await pool.query(``, [])
    // const id = result.insertId
    const id = result
    return getGenre(id)
}

// UPDATE
export async function updateGenre(id) { }

// DELETE
export async function deleteGenre(id) {
    const [rows] = await pool.query(``, [id])
    return rows
}

export default database;