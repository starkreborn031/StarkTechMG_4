const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo ao StarkTechMG! Mayara Aparecida, eu te amo!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
