const fetch = require('node-fetch')
module.exports = async function pegarPlataformas(){
    let url = `https://api.rawg.io/api/platforms`;
    let plataforma = [];
    let resultado = await fetch(url)
    let json = await resultado.json();
    for(let i = 0; i < json.results.length; i++){
        plataforma.push(json.results[i]);
    }
    return plataforma;
}