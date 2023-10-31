import express from 'express';
import { Router, Request, Response } from 'express';
import dotenv from 'dotenv'; 
import route from './routes';

dotenv.config();

const app = express();

app.use(express.json());

app.use(route);

app.listen(process.env.PORT, () => 'server running on port 3333');