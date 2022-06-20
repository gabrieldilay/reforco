const express = require('express');
const produtoController = require('../controllers/produtoController');
const router = express.Router();

router.get('/', produtoController.listar);
router.get('/', produtoController.salvar);
router.get('/codigo', produtoController.buscarPorCodigo);
router.put('/codigo', produtoController.atualizar);
router.delete('/codigo', produtoController.excluir);

module.exports = router;