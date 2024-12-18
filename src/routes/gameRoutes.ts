import express from 'express';
import { createGame, makeMove } from '../controllers/gameController';

const gameRoutes = express.Router();

gameRoutes.post('/', createGame);
gameRoutes.post('/move', makeMove);

export default gameRoutes;
