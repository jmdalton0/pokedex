import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pokemonRouter from './pokemon/pokemon-router';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use('/', [pokemonRouter]);

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Pokedex REST API</h1>');
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
});