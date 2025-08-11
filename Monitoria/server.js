const express = require('express');
const app = express();
app.use(express.json());

let restaurantes = [];

app.post('/restaurante', (req, res) => {
    const novoRestaurante = req.body;
    restaurantes.push(novoRestaurante);
    res.status(201).json({ mensagem: 'Restaurante salvo com sucesso!', dados: novoRestaurante });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
