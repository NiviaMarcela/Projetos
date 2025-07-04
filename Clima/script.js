const temperatura = document.getElementById("temp")
const temperaturaf = document.getElementById("tempf")
const cidade = document.getElementById("cidade")
const estado = document.getElementById("estado")
const nomeCidadeInput = document.getElementById("nomeCidadeInput")
const buttonPesquisar = document.getElementById("pesquisar")
const conteinerTemp = document.getElementById("conteinerTemp")
conteinerTemp.style.display = "none"


async function buscarClima(){
    const buscarCidade = nomeCidadeInput.value

    if (buscarCidade){
  
    const resposta = await fetch(`https://wttr.in/${buscarCidade}?format=j1`);
    const dados = await resposta.json();
    console.log(dados);
    const condicoesatuais = dados.current_condition[0];
    console.log(condicoesatuais)

    const celsius = condicoesatuais.temp_C
    console.log(celsius)
    temperatura.textContent = celsius

    const fahrenheit = condicoesatuais.temp_F
    console.log(fahrenheit)
    temperaturaf.textContent = fahrenheit

    const cidadeNome = dados.nearest_area[0].areaName[0].value;
    console.log(cidadeNome)
    cidade.textContent = cidadeNome

    const estadoNome = dados.nearest_area[0].region[0].value;
    console.log(estadoNome)
    estado.textContent = estadoNome

    nomeCidadeInput.value = ""

    conteinerTemp.style.display = "flex"

}

}
// buscarclima()




