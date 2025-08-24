const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "John Doe",
    age: 25,
  });
});

app.get("/menu", (req, res) => {
  res.json({
    pratos: [
      {
        nome: "Feijoada Completa",
        descricao: "Feijoada tradicional com arroz, couve e farofa",
        preco: 45.9,
      },
      {
        nome: "Moqueca de Peixe",
        descricao: "Peixe fresco com leite de coco, dendê e pimentões",
        preco: 55.9,
      },
      {
        nome: "Picanha na Brasa",
        descricao: "Picanha grelhada com arroz, feijão e vinagrete",
        preco: 64.9,
      },
    ],
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
