import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mysql2 from 'mysql2';
import movieRoutes from './routes/movie.routes';

dotenv.config();

const app: Express = express();
// const URL = (process.env.TYPE = 'production') ? 'https://movie-recommendation.vercel.app' : 'http://localhost' 
const url = 'http://localhost' 
const port = process.env.PORT || 3100;

const corsOptions: any = {
    origin: [ 'http://127.0.0.1:3000', process.env.PROD_URL],
}

// middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', movieRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello there');
})

app.listen(port, () => {
    console.log(`[server]: Server up and running at ${url}:${port}`);
})