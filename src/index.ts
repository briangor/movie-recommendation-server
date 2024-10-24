import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
// const URL = (process.env.TYPE = 'production') ? 'https://movie-recommendation.vercel.app' : 'http://localhost' 
const url = 'http://localhost' 
const port = process.env.PORT || 3100;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
})

app.listen(port, () => {
    console.log(`[server]: Server up and running at ${url}:${port}`);
})