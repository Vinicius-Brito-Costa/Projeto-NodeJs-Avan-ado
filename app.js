const express           = require('express');
const bodyParser        = require('body-parser');
const pegarJogos        = require('./function/selecionarJogos.js');
const pegarPlataformas  = require('./function/plataformas.js');
const porta = 5000;
const exp = express();

exp.set('view engine', 'ejs');
exp.use(bodyParser.urlencoded({extended: true}));
exp.set(bodyParser.json());
exp.set('views', './views');

exp.get('/', async (req, res) => {
    const plat = await pegarPlataformas();
    res.render('index', {jogo: [], plataformas: plat});
});
exp.post('/', async (req, res) => {
    const plat = await pegarPlataformas();
    const { nome, plataforma } = req.body;
    const resultado = await pegarJogos(nome, plataforma);

    

    res.render('index', {jogo: resultado, plataformas: plat})
});
exp.listen(porta);