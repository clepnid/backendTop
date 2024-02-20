'use strict';

var dbConn = require('./../config/db.config');

var imagenesElementosPublicaciones = function(imagenesElementosPublicaciones){
  this.idElementosPublicaciones = imagenesElementosPublicaciones.idElementosPublicaciones;
  this.imagen = imagenesElementosPublicaciones.imagen;
};

imagenesElementosPublicaciones.create = function (newUsr, result) {
  dbConn.query("INSERT INTO imagenesElementosPublicaciones SET ?", newUsr, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

imagenesElementosPublicaciones.findById = function (id, result) {
  dbConn.query("SELECT * FROM imagenesElementosPublicaciones WHERE id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

imagenesElementosPublicaciones.findAll = function (result) {
  dbConn.query("SELECT * FROM imagenesElementosPublicaciones", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log('imagenesElementosPublicaciones:', res);
      result(null, res);
    }
  });
};

imagenesElementosPublicaciones.update = function (id, imagenesElementosPublicaciones, result) {
  dbConn.query("UPDATE imagenesElementosPublicaciones SET idElementosPublicaciones=?, imagen=? WHERE id = ?", 
    [imagenesElementosPublicaciones.idElementosPublicaciones, imagenesElementosPublicaciones.imagen, id], 
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

imagenesElementosPublicaciones.delete = function (id, result) {
  dbConn.query("DELETE FROM imagenesElementosPublicaciones WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = imagenesElementosPublicaciones;