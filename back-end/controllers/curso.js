const Curso = require('../models/Curso');

const controller = {}; // Objeto vazio

controller.novo = async function(req, res) {
   try {
      await Curso.create(req.body);
      // HTTP 201: Created
      res.sendStatus(201).end();
   }
   catch(erro) {
      console.error(erro);
      // HTTP 500: Internal server error
      res.sendStatus(500).end();
   }
}


module.exports = controller;