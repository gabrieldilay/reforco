var express = require('express');
var router = express.Router();

const produtos = [
  {
      id: 1,
      nome:'Aula de Inglês',
      desc:'Cleide Costa',
      foto: '../assets/img/ingles.jpg',
      preco: 89.90,
      avaliacao: 5,
  },
  {
      id: 2,
      nome:'Aula de Portugues',
      desc:'Jussara Oliveira',
      foto: '../assets/img/portugues.jpg',
      preco: 49.90,
      avaliacao: 4,
  },
  {
      id: 3,
      nome:'Aula de Matematica',
      desc:'Roseane de Silva',
      foto: '../assets/img/matematica.jpg',
      preco: 69.90,
      avaliacao: 5,
  },
]


/* GET a lista de produtos. */
router.get('/', function(req, res, next) {
  res.json(produtos);
});

/* GET um unico produto. */
router.get('/produtoId', function(req, res, next) {
  const produtoId = req.params.produtoId;
  const produto = produtos[produtoId - 1];
  res.json(produto);
});

router.post('/', function(req, res, next) {
  let produto = req.body;
  produto.id = produtos.length + 1;
  produtos.push(produto);
  res.send(produto);
});

router.put('/:produtoId', function(req, res, next) {
  let produto = req.body;
  produtos.splice(produto.id -1, 1, produto);
  res.send(produto);
});

router.delete('/produtoId', function(req, res, next) {
  const produtoId = req.params.produtoId;
  produtos.splice(produtoId);
  res.status(204);
});

module.exports = router;
