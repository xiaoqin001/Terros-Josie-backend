import Player from '../models/player';
import { IPlayer } from '../types/player';

class PlayerService {

  async findPlayer(): Promise<IPlayer[]> {
    const allPlayers = Player.find();
    return allPlayers;
  }

  async createPlayer(name: string, isComputer: boolean): Promise<IPlayer> {
    const newPlayer = new Player({
      name,
      isComputer
    });

    return await newPlayer.save();
  }
}


export default PlayerService;
