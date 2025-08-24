const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/',(requisicao,resposta)=> {
    resposta.send('Bem Vindo ao meu servidor! \n  Para descobrir se o numero é par ou impar, rota/par-ou-impar');

}) ;

app.get('/par-ou-impar/:numero',(requisicao,resposta) =>{
    const numero = parseInt(requisicao.params.numero);
    if (isNaN(numero)) {
        return resposta.status(400).send('Por favor, forneça um número válido.');
    }
    
    const resultado = numero % 2 === 0 ? 'par' : 'impar';
    resposta.send(`O número ${numero} é ${resultado}.`);
    
});

app.get('/somar/:n1/:n2', (requisicao,resposta)=>{
    const n1 = parseInt(requisicao.params.n1);
    const n2 = parseInt(requisicao.params.n2);
    
    if (isNaN(n1) || isNaN(n2)) {
        return resposta.status(400).send('Por favor, forneça dois números válidos.');
    }
    
    const resultado = n1 + n2;
    resposta.send(`A soma de ${n1} e ${n2} é ${resultado}.`);
});

app.post('/subtrair',(requisicao,resposta)=>{
    const { n1, n2 } = requisicao.body;

    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return resposta.status(400).send('Por favor, forneça dois números válidos.');
    }

    const resultado = n1 - n2;
    resposta.send(`A subtração de ${n1} e ${n2} é ${resultado}.`);
});

app.post('/calcular/:aperacao',(requisicao,resposta)=>{
    const operacao = requisicao.params.aperacao;
    const { n1, n2 } = requisicao.body;

    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        return resposta.status(400).send('Por favor, forneça dois números válidos.');
    }

    let resultado;

    switch (operacao) {
        case 'somar':
            resultado = n1 + n2;
            break;
        case 'subtrair':
            resultado = n1 - n2;
            break;
        case 'multiplicar':
            resultado = n1 * n2;
            break;
        case 'dividir':
            if (n2 === 0) {
                return resposta.status(400).send('Divisão por zero não é permitida.');
            }
            resultado = n1 / n2;
            break;
        default:
            return resposta.status(400).send('Operação inválida. Use somar, subtrair, multiplicar ou dividir.');
    }

    resposta.send(`O resultado da operação ${operacao} entre ${n1} e ${n2} é ${resultado}.`);
});










app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
})
