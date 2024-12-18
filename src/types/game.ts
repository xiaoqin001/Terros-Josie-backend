import { Document } from 'mongoose';

export interface IGame extends Document {
  players: { white: string; black: string | null };
  boardState: string[][];
  turn: 'white' | 'black';
  isGameOver: boolean;
  winner: 'white' | 'black' | null;
}
