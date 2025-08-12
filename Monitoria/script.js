
// const localapi = "http://localhost:3000";

// async function buscarrest() {
//     try {
//         const response = await fetch(restapi);
//         const dados = await response.json();

//         const meal = dados.meals[0]; // pega o primeiro prato

//         const restsalvar = {
//             nome: meal.strMeal,
//             endereco: "Endereço 1 de maio", // você pode preencher manualmente
//             ingredientes: [
//                 meal.strIngredient1,
//                 meal.strIngredient2,
//                 meal.strIngredient3
//             ],
//             telefone: "1234-5678" // fictício também
//         };

//         const responseLocal = await fetch(localapi, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(restsalvar),
//         });

//         const resultado = await responseLocal.json();
//         console.log(resultado);

//     } catch (error) {
//         console.error("Erro ao buscar ou salvar restaurante:", error);
//     }
// }

// buscarrest();

// const restapi = "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken";

async function salvarRestaurante() {
  try {
    const novoRestaurante = {
      nome: "Sabor do Maranhão",
      tipo: "Regional",
      cidade: "Codó"
    };

    const response = await fetch('http://localhost:3000/restaurante', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoRestaurante)
    });

    const resultado = await response.json();
    console.log('✅ Restaurante salvo:', resultado);
  } catch (error) {
    console.error('❌ Erro ao salvar restaurante:', error);
  }
}

async function buscarRestaurantes() {
  try {
    const response = await fetch('http://localhost:3000/restaurante');
    const restaurantes = await response.json();
    console.log('📋 Lista de restaurantes:', restaurantes);
  } catch (error) {
    console.error('❌ Erro ao buscar restaurantes:', error);
  }
}

async function executar() {
  await salvarRestaurante();
  await buscarRestaurantes();
}

executar();
