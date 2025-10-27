// Middleware to validate movie data before processing
import { Request, Response, NextFunction } from 'express';
import { isValidDate } from '../utils/helper';

export const validateMovie = (req: Request, res: Response, next: NextFunction): void => {
    const { title, genre, releaseDate } = req.body;
    // Validate title
    if (!title || typeof title !== 'string' || title.trim().length === 0) {
        res.status(400).json({ message: 'Title is required and must be a non-empty string' });
        return;
    }
    // Validate genre
    if (!genre || typeof genre !== 'string' || genre.trim().length === 0) {
        res.status(400).json({ message: 'Genre is required and must be a non-empty string' });
        return;
    }
    // Validate releaseDate
    if (!releaseDate) {
        res.status(400).json({ message: 'Release date is required' });
        return;
    }
    if (!isValidDate(releaseDate)) {
        res.status(400).json({ message: 'Release date must be a valid date' });
        return;
    }
    next();
};

