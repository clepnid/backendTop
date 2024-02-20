'use strict';

var dbConn = require('./../config/db.config');

var elementosPublicaciones = function(elementosPublicaciones){
  this.idPublicacion = elementosPublicaciones.idPublicacion;
  this.tipo = elementosPublicaciones.tipo;
  this.puntos = elementosPublicaciones.puntos;
  this.descripcion = elementosPublicaciones.descripcion;
  this.creado_en = new Date();
};

elementosPublicaciones.create = function (newUsr, result) {
  dbConn.query("INSERT INTO elementosPublicaciones SET ?", newUsr, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

elementosPublicaciones.findById = function (id, result) {
  dbConn.query("SELECT * FROM elementosPublicaciones WHERE id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

elementosPublicaciones.findAll = function (result) {
  dbConn.query("SELECT * FROM elementosPublicaciones", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log('elementosPublicaciones:', res);
      result(null, res);
    }
  });
};

elementosPublicaciones.update = function (id, elementosPublicaciones, result) {
  dbConn.query("UPDATE elementosPublicaciones SET idPublicacion=?, tipo=?, puntos=?, descripcion=? WHERE id = ?", 
    [elementosPublicaciones.idPublicacion, elementosPublicaciones.tipo, elementosPublicaciones.puntos, elementosPublicaciones.descripcion, id], 
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

elementosPublicaciones.delete = function (id, result) {
  dbConn.query("DELETE FROM elementosPublicaciones WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = elementosPublicaciones;