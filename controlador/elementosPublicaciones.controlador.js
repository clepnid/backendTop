'use strict';

const ElementoPublicacion = require('./../modelos/elementosPublicaciones.modelo');

exports.findAll = function(req, res) {
  ElementoPublicacion.findAll(function(err, ElementoPublicacion) {
    console.log('controller');
    if (err)
      res.send(err);
    console.log('res', ElementoPublicacion);
    res.send(ElementoPublicacion);
  });
};

exports.create = function(req, res) {
  const new_ElementoPublicacion = new ElementoPublicacion(req.body);
  // Manejar error de campo nulo
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    ElementoPublicacion.create(new_ElementoPublicacion, function(err, ElementoPublicacion) {
      if (err)
        res.send(err);
      res.json({ error:false, message:"ElementoPublicacion añadido exitosamente!", data:ElementoPublicacion });
    });
  }
};

exports.findById = function(req, res) {
  ElementoPublicacion.findById(req.params.id, function(err, ElementoPublicacion) {
    if (err)
      res.send(err);
    res.json(ElementoPublicacion);
  });
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    ElementoPublicacion.update(req.params.id, new ElementoPublicacion(req.body), function(err, ElementoPublicacion) {
      if (err)
        res.send(err);
      res.json({ error:false, message: 'ElementoPublicacion actualizado exitosamente' });
    });
  }
};

exports.delete = function(req, res) {
  ElementoPublicacion.delete(req.params.id, function(err, ElementoPublicacion) {
    if (err)
      res.send(err);
    res.json({ error:false, message: 'ElementoPublicacion eliminado exitosamente' });
  });
};