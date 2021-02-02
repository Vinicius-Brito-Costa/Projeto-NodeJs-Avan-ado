const fetch = require('node-fetch')
module.exports = async function pegarJogos(pesquisa, plataforma){
    let url = `https://api.rawg.io/api/games?search=${pesquisa}&platforms=${plataforma}&search_precise=true`;
    let jogo = [];
    let resultado = await fetch(url)
    let json = await resultado.json();
    for(let i = 0; i < json.results.length; i++){
        jogo.push(json.results[i]);
    }
    return jogo;
}