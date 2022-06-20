const express = require('express');
const produtoController = require('../controllers/produtoController');
const router = express.Router();

router.get('/', produtoController.listar);
router.get('/', produtoController.salvar);
router.get('/produtoId', produtoController.buscarPorId);
router.get('/produtoId', produtoController.atualizar);
router.get('/produtoId', produtoController.excluir);

module.exports = router;