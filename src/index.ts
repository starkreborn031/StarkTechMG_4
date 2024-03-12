import express, { Request, Response } from 'express';
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
    // Seu código aqui
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
