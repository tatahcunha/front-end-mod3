const fetch = require ("node-fetch");

fetch("https://randomuser.me/api/")
    .then((result) => {
        console.log(result);
    })
    .catch ((erro) => {
        console.log(erro);
    });