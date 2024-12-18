import mongoose, { model, Schema } from "mongoose";
import { IPlayer } from "../types/player";

const PlayerSchema: Schema = new Schema({
    name: { type: String, required: true },
    isComputer: { type: Boolean, default: false },
  });

export default mongoose.model<IPlayer>('Player', PlayerSchema);
