'use strict';

const Tema = require('./../modelos/temas.modelo');

exports.findAll = function(req, res) {
  Tema.findAll(function(err, Tema) {
    console.log('controller');
    if (err)
      res.send(err);
    console.log('res', Tema);
    res.send(Tema);
  });
};

exports.create = function(req, res) {
  const new_Tema = new Tema(req.body);
  // Manejar error de campo nulo
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    Tema.create(new_Tema, function(err, Tema) {
      if (err)
        res.send(err);
      res.json({ error:false, message:"Tema añadido exitosamente!", data:Tema });
    });
  }
};

exports.findById = function(req, res) {
  Tema.findById(req.params.id, function(err, Tema) {
    if (err)
      res.send(err);
    res.json(Tema);
  });
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    Tema.update(req.params.id, new Tema(req.body), function(err, Tema) {
      if (err)
        res.send(err);
      res.json({ error:false, message: 'Tema actualizado exitosamente' });
    });
  }
};

exports.delete = function(req, res) {
  Tema.delete(req.params.id, function(err, Tema) {
    if (err)
      res.send(err);
    res.json({ error:false, message: 'Tema eliminado exitosamente' });
  });
};