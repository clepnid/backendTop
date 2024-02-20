'use strict';

var dbConn = require('./../config/db.config');

var imagenesPublicacion = function(imagenesPublicacion){
  this.idPublicacion = imagenesPublicacion.idPublicacion;
  this.imagen = imagenesPublicacion.imagen;
};

imagenesPublicacion.create = function (newEle, result) {
  dbConn.query("INSERT INTO imagenesPublicacion SET ?", newEle, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

imagenesPublicacion.findById = function (id, result) {
  dbConn.query("SELECT * FROM imagenesPublicacion WHERE id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

imagenesPublicacion.findAll = function (result) {
  dbConn.query("SELECT * FROM imagenesPublicacion", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log('imagenesPublicacion:', res);
      result(null, res);
    }
  });
};

imagenesPublicacion.update = function (id, imagenesPublicacion, result) {
  dbConn.query("UPDATE imagenesPublicacion SET idPublicacion=?, imagen=? WHERE id = ?", 
    [imagenesPublicacion.idPublicacion, imagenesPublicacion.imagen, id], 
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

imagenesPublicacion.delete = function (id, result) {
  dbConn.query("DELETE FROM imagenesPublicacion WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = imagenesPublicacion;