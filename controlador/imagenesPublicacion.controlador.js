'use strict';

const ImagenPublicacion = require('./../modelos/imagenesPublicacion.modelo');

exports.findAll = function(req, res) {
  ImagenPublicacion.findAll(function(err, ImagenPublicacion) {
    console.log('controller');
    if (err)
      res.send(err);
    console.log('res', ImagenPublicacion);
    res.send(ImagenPublicacion);
  });
};

exports.create = function(req, res) {
  const new_ImagenPublicacion = new ImagenPublicacion(req.body);
  // Manejar error de campo nulo
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    ImagenPublicacion.create(new_ImagenPublicacion, function(err, ImagenPublicacion) {
      if (err)
        res.send(err);
      res.json({ error:false, message:"ImagenPublicacion añadido exitosamente!", data:ImagenPublicacion });
    });
  }
};

exports.findById = function(req, res) {
  ImagenPublicacion.findById(req.params.id, function(err, ImagenPublicacion) {
    if (err)
      res.send(err);
    res.json(ImagenPublicacion);
  });
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    ImagenPublicacion.update(req.params.id, new ImagenPublicacion(req.body), function(err, ImagenPublicacion) {
      if (err)
        res.send(err);
      res.json({ error:false, message: 'ImagenPublicacion actualizado exitosamente' });
    });
  }
};

exports.delete = function(req, res) {
  ImagenPublicacion.delete(req.params.id, function(err, ImagenPublicacion) {
    if (err)
      res.send(err);
    res.json({ error:false, message: 'ImagenPublicacion eliminado exitosamente' });
  });
};