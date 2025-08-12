const express = require('express');
const app = express();
const port = 3000;
const cors = require;
app.use(cors());
app.use(express.json());

app.listen(port,() => {
  console.log('Servidor http://localhost:${port}');
});

let restaurantes = [];

app.post('/restaurante', (req, res) => {
    const novoRestaurante = req.body;
    restaurantes.push(novoRestaurante);
    res.status(201).json({ mensagem: 'Restaurante salvo com sucesso!', dados: novoRestaurante });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});

app.get('/restaurante', (req, res) => {
  res.json({
      nome: "Sabor do Maranhão",
      tipo: "Regional",
      cidade: "Codó"});
});

const port = 3000
app.listen(port.toExponential() => {
  console.log("servidor ${port}")
});