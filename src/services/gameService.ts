import ChessEngine from './chessEngine';
import Game from '../models/game';
import { IGame } from '../types/game';

class GameService {
  async createGame(players: { white: string; black: string | null }): Promise<IGame> {
    const engine = new ChessEngine();
    console.log(engine.getBoard())

    const newGame = new Game({
      players,
      boardState: engine.getBoard(),
      turn: engine.getTurn(),
      isGameOver: engine.isGameFinished(),
      winner: engine.getWinner(),
    });

    return await newGame.save();
  }

  async makeMove(gameId: string, move: { from: { row: number; col: number }; to: { row: number; col: number } }): Promise<IGame | null> {
    const game = await Game.findById(gameId);
    if (!game) return null;

    const engine = new ChessEngine();
    engine.setBoard(game.boardState);
    engine.setTurn(game.turn);
    const isMoveValid = engine.makeMove(move);

    if (!isMoveValid) return null;

    game.boardState = engine.getBoard();
    game.turn = engine.getTurn();
    game.isGameOver = engine.isGameFinished();
    game.winner = engine.getWinner();

    return await game.save();
  }

}

export default GameService;
