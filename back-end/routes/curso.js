const express = require('express');
const router = express.Router();
const controller = require('../controllers/curso');

router.post('/', controller.novo);
router.get('/', controller.listar);
router.get('/:id', controller.obterUm);
router.put('/', controller.atualizar);

module.exports = router;