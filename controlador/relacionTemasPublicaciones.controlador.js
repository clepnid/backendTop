'use strict';

const RelacionTemaPublicacion = require('./../modelos/elementosPublicaciones.modelo');

exports.findAll = function(req, res) {
  RelacionTemaPublicacion.findAll(function(err, RelacionTemaPublicacion) {
    console.log('controller');
    if (err)
      res.send(err);
    console.log('res', RelacionTemaPublicacion);
    res.send(RelacionTemaPublicacion);
  });
};

exports.create = function(req, res) {
  const new_RelacionTemaPublicacion = new RelacionTemaPublicacion(req.body);
  // Manejar error de campo nulo
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    RelacionTemaPublicacion.create(new_RelacionTemaPublicacion, function(err, RelacionTemaPublicacion) {
      if (err)
        res.send(err);
      res.json({ error:false, message:"RelacionTemaPublicacion añadido exitosamente!", data:RelacionTemaPublicacion });
    });
  }
};

exports.findById = function(req, res) {
  RelacionTemaPublicacion.findById(req.params.id, function(err, RelacionTemaPublicacion) {
    if (err)
      res.send(err);
    res.json(RelacionTemaPublicacion);
  });
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    RelacionTemaPublicacion.update(req.params.id, new RelacionTemaPublicacion(req.body), function(err, RelacionTemaPublicacion) {
      if (err)
        res.send(err);
      res.json({ error:false, message: 'RelacionTemaPublicacion actualizado exitosamente' });
    });
  }
};

exports.delete = function(req, res) {
  RelacionTemaPublicacion.delete(req.params.id, function(err, RelacionTemaPublicacion) {
    if (err)
      res.send(err);
    res.json({ error:false, message: 'RelacionTemaPublicacion eliminado exitosamente' });
  });
};