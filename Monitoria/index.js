const restapi = "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken";
const localapi = "http://localhost:3000";

async function buscarrest() {
    try {
        const response = await fetch(restapi);
        const dados = await response.json();

        const meal = dados.meals[0]; // pega o primeiro prato

        const restsalvar = {
            nome: meal.strMeal,
            endereco: "Endereço fictício", // você pode preencher manualmente
            ingredientes: [
                meal.strIngredient1,
                meal.strIngredient2,
                meal.strIngredient3
            ],
            telefone: "0000-0000" // fictício também
        };

        const responseLocal = await fetch(localapi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(restsalvar),
        });

        const resultado = await responseLocal.json();
        console.log(resultado);

    } catch (error) {
        console.error("Erro ao buscar ou salvar restaurante:", error);
    }
}

buscarrest();

