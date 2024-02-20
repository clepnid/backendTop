'use strict';

const ImagenElementoPublicacion = require('./../modelos/imagenesElementosPublicaciones.modelo');
const path = require('path');
var fs = require("fs");

exports.findAll = function(req, res) {
  ImagenElementoPublicacion.findAll(function(err, ImagenElementoPublicacion) {
    console.log('controller');
    if (err)
      res.send(err);
    console.log('res', ImagenElementoPublicacion);
    res.send(ImagenElementoPublicacion);
  });
};

exports.uploadImagen = function(req, res) {
    console.log(req.body);
    console.log(req.files);
    res.json({ message: "Successfully uploaded files" });
};

exports.create = function(req, res) {
  const new_ImagenElementoPublicacion = new ImagenElementoPublicacion(req.body);
  // Manejar error de campo nulo
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    ImagenElementoPublicacion.create(new_ImagenElementoPublicacion, function(err, ImagenElementoPublicacion) {
      if (err)
        res.send(err);
      res.json({ error:false, message:"ImagenElementoPublicacion añadido exitosamente!", data:ImagenElementoPublicacion });
    });
  }
};

exports.findById = function(req, res) {
  ImagenElementoPublicacion.findById(req.params.id, function(err, ImagenElementoPublicacion) {
    if (err)
      res.send(err);
    res.json(ImagenElementoPublicacion);
  });
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    ImagenElementoPublicacion.update(req.params.id, new ImagenElementoPublicacion(req.body), function(err, ImagenElementoPublicacion) {
      if (err)
        res.send(err);
      res.json({ error:false, message: 'ImagenElementoPublicacion actualizado exitosamente' });
    });
  }
};

exports.delete = function(req, res) {
  ImagenElementoPublicacion.delete(req.params.id, function(err, ImagenElementoPublicacion) {
    if (err)
      res.send(err);
    res.json({ error:false, message: 'ImagenElementoPublicacion eliminado exitosamente' });
  });
};