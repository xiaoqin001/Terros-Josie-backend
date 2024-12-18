import express, { Express } from 'express';
import connectDB from './utils/db';
import gameRoutes from './routes/gameRoutes';
import playerRoutes from './routes/playerRoutes';
import dotenv from "dotenv";

dotenv.config();


const app: Express = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());

connectDB();

app.use('/game', gameRoutes);
app.use('/player', playerRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
