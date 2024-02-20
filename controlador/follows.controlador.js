'use strict';

const Follow = require('./../modelos/follows.modelo');

exports.findAll = function(req, res) {
  Follow.findAll(function(err, Follow) {
    console.log('controller');
    if (err)
      res.send(err);
    console.log('res', Follow);
    res.send(Follow);
  });
};

exports.create = function(req, res) {
  const new_Follow = new Follow(req.body);
  // Manejar error de campo nulo
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    Follow.create(new_Follow, function(err, Follow) {
      if (err)
        res.send(err);
      res.json({ error:false, message:"Follow añadido exitosamente!", data:Follow });
    });
  }
};

exports.findById = function(req, res) {
  Follow.findById(req.params.id, function(err, Follow) {
    if (err)
      res.send(err);
    res.json(Follow);
  });
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    Follow.update(req.params.id, new Follow(req.body), function(err, Follow) {
      if (err)
        res.send(err);
      res.json({ error:false, message: 'Follow actualizado exitosamente' });
    });
  }
};

exports.delete = function(req, res) {
  Follow.delete(req.params.id, function(err, Follow) {
    if (err)
      res.send(err);
    res.json({ error:false, message: 'Follow eliminado exitosamente' });
  });
};