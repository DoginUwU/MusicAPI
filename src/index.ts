import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import './services/axios';

import routes from "./routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});