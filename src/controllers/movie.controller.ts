// Contains functions for handling requests related to movies

import { Request, Response } from 'express';
import { connection, Movie } from '../models/movie.model';

// Get all movies
export const getMovies = async (req: Request, res: Response) => {
    try {
        // const [rows]:any = await(await connection).execute('SELECT * FROM movies');
        const [rows]: any = await connection.query('SELECT * FROM movies');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving movies', error });
    }
};

// Get a movie by ID
export const getMovieById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const [rows]: any = await (await connection).execute('SELECT * FROM movies WHERE movie_id = ?', [id]);
        if (rows.length === 0) {
            res.status(404).json({ message: 'Movie not found' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving movie', error });
    }
};

// Add a new movie
export const addMovie = async (req: Request, res: Response) => {
    const { title, genre, releaseDate } = req.body;
    await (await connection).execute('INSERT INTO movies (title, genre, releaseDate) VALUES (?, ?, ?)', [title, genre, releaseDate]);
    res.status(201).json({ message: 'Movie added successfully!' });
};

// Update a movie
export const updateMovie = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, genre, releaseDate } = req.body;
    await (await connection).execute('UPDATE movies SET title = ?, genre = ?, releaseDate = ? WHERE id = ?', [title, genre, releaseDate, id]);
    res.json({ message: 'Movie updated successfully! ' });
};

// Delete a movie
export const deleteMovie = async (req: Request, res: Response) => {
    const { id } = req.params;
    await (await connection).execute('DELETE FROM movies WHERE id = ?', [id]);
    res.json({ message: 'Movie deleted successfully! ' });
};
