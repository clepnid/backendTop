'use strict';

var dbConn = require('./../config/db.config');

var publicaciones = function(publicaciones){
  this.idUsuario = publicaciones.idUsuario;
  this.tipo = publicaciones.tipo;
  this.descripcion = publicaciones.descripcion;
  this.creado_en = new Date();
  this.modificado_en = new Date();
};

publicaciones.create = function (newPub, result) {
  dbConn.query("INSERT INTO publicaciones SET ?", newPub, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

publicaciones.findById = function (id, result) {
  dbConn.query("SELECT * FROM publicaciones WHERE id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

publicaciones.findAll = function (result) {
  dbConn.query("SELECT * FROM publicaciones", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log('publicaciones:', res);
      result(null, res);
    }
  });
};

publicaciones.update = function (id, publicaciones, result) {
  dbConn.query("UPDATE publicaciones SET idUsuario=?, tipo=?, descripcion=? WHERE id = ?", 
    [publicaciones.idUsuario, publicaciones.tipo, publicaciones.descripcion, id], 
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

publicaciones.delete = function (id, result) {
  dbConn.query("DELETE FROM publicaciones WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = publicaciones;