import express from 'express';
import { IMCController } from './controllers/imc.controller';
import path from 'path';

const app = express();
const port = 3000;
const imcController = new IMCController();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/imc', (req, res) => imcController.getImc(req, res));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
