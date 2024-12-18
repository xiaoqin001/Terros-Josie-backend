import { Request, Response } from 'express';
import GameService from '../services/gameService';

const gameService = new GameService();

export const createGame = async (req: Request, res: Response): Promise<void> => {
  console.log(req.body)
  const { white, black } = req.body;


  try {
    const game = await gameService.createGame( {white: white, black: black });
    res.status(201).json(game);
  } catch (err) {
    res.status(500).json({ error: 'Error creating game', details: err });
  }
};

export const makeMove = async (req: Request, res: Response): Promise<void> => {
  const { gameId, move } = req.body;
  console.log(req.body)

  try {
    const updatedGame = await gameService.makeMove(gameId, move);
    if (!updatedGame) {
      res.status(400).json({ error: 'Invalid move or game not found' });
    } else {
      res.status(200).json(updatedGame);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error making move', details: err });
  }
};
