import express from 'express';
import { getPlayer, createPlayer } from '../controllers/playerController';

const playerRoutes = express.Router();

playerRoutes.get('/', getPlayer);
playerRoutes.post('/', createPlayer);

export default playerRoutes;
