

// somar.addEventListener("click", ()=> {
//     let valor1=Number(valor1.value)
//     let valor2=Number(valor2.value)

// })

function operacao (operador) { 
    const valor1 = Number(document.getElementById("valor1").value);
    const valor2 = Number(document.getElementById("valor2").value);
    const resultado = document.getElementById("resultado");
    let calculo;

    switch (operador) {
        case 'somar': calculo = valor1 + valor2; break;
        case 'subtrair': calculo = valor1 - valor2; break;
        case 'multiplicar': calculo = valor1 * valor2; break;
        case 'dividir': calculo = valor2 !== 0 ? valor1 / valor2 : "Erro: divisão por zero"; break;
        
    }

    resultado.textContent = `RESULTADO: ${calculo}`;
}

        

// const somar = document.getElementById(Somar)
// const subtrair = document.getElementById(Subtrair)
// const multiplicar = document.getElementById(Multiplicar)
// const dividir = document.getElementById(Dividir)