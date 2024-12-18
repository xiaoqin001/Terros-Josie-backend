import mongoose, { model, Schema } from "mongoose";
import { IGame } from "../types/game";

const GameSchema: Schema = new Schema({
    players: {
      white: { type: String, required: true },
      black: { type: String, default: null },
    },
    boardState: { type: [[String]], required: true },
    turn: { type: String, enum: ['white', 'black', 'game-over'], required: true },
    isGameOver: { type: Boolean, default: false },
    winner: { type: String, enum: ['white', 'black',null], default: null },
  });

export default mongoose.model<IGame>('Game', GameSchema);
