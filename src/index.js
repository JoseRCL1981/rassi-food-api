import express, { Router } from 'express'
import cors from "cors";
import router from './routes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.get('/teste', (req, res) => {
  return res.status(401).json({mensagem: "Senha ou e-mail inválidos"})
})

app.listen(3001, () => {
  console.log('Servidor executando na porta: 3001')
})