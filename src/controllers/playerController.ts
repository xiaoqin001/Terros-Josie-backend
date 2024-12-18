import { Request, Response } from 'express';
import PlayerService from '../services/playerService'


const playerService = new PlayerService();


export const getPlayer = async (req: Request, res: Response): Promise<void> => {

  try {
    const player = await playerService.findPlayer();
    res.status(200).json(player);
  } catch (err) {
    res.status(500).json({ error: 'Error finding player', details: err });
  }
};


export const createPlayer = async (req: Request, res: Response): Promise<void> => {
  const { name, isComputer } = req.body;

  try {
    const player = await playerService.createPlayer(name, isComputer);
    res.status(201).json(player);
  } catch (err) {
    res.status(500).json({ error: 'Error creating player', details: err });
  }
};
