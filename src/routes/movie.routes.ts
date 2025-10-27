// Defines routes for movie-related endpoints (e.g., /movies)

import express from 'express';
import { getMovies, getMovieById, addMovie, updateMovie, deleteMovie } from '../controllers/movie.controller';
import { validateMovie } from '../middlewares/validateMovie';

const router = express.Router();

router.get('/movies', getMovies);
router.get('/movies/:id', getMovieById);
router.post('/movies', validateMovie, addMovie);
router.put('/movies/:id', validateMovie, updateMovie);
router.delete('/movies/:id', deleteMovie);

export default router;
