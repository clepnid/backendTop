'use strict';

const Publicacion = require('./../modelos/publicaciones.modelo');

exports.findAll = function(req, res) {
  Publicacion.findAll(function(err, Publicacion) {
    console.log('controller');
    if (err)
      res.send(err);
    console.log('res', Publicacion);
    res.send(Publicacion);
  });
};

exports.create = function(req, res) {
  const new_Publicacion = new Publicacion(req.body);
  // Manejar error de campo nulo
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    Publicacion.create(new_Publicacion, function(err, Publicacion) {
      if (err)
        res.send(err);
      res.json({ error:false, message:"Publicacion añadido exitosamente!", data:Publicacion });
    });
  }
};

exports.findById = function(req, res) {
  Publicacion.findById(req.params.id, function(err, Publicacion) {
    if (err)
      res.send(err);
    res.json(Publicacion);
  });
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    Publicacion.update(req.params.id, new Publicacion(req.body), function(err, Publicacion) {
      if (err)
        res.send(err);
      res.json({ error:false, message: 'Publicacion actualizado exitosamente' });
    });
  }
};

exports.delete = function(req, res) {
  Publicacion.delete(req.params.id, function(err, Publicacion) {
    if (err)
      res.send(err);
    res.json({ error:false, message: 'Publicacion eliminado exitosamente' });
  });
};