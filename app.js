// app.js
const express = require('express');
const app = express();
const port = 3000;

// Importe o controlador
import { listarProdutos } from './Produtos/produtosController';
// Use o controlador na rota
app.get('/produtos', listarProdutos);


// Rota para a Página Inicial
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// Importe o express
import express from 'express';
// Rota para a página de produtos
app.get('/produtos', (req, res) => {
    res.send('Página de Produtos');
});

// Configuração para o servidor ouvir na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
