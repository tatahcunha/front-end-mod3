const fetch = require ("node-fetch");
fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((result) => {
        console.log(result);
    })
    .catch((erro) => {
        console.log(erro);
    });