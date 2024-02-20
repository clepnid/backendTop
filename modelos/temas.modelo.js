'use strict';

var dbConn = require('./../config/db.config');

var temas = function(temas){
  this.nombre = temas.nombre;
  this.descripcion = temas.descripcion;
  this.creado_en = new Date();
};

temas.create = function (newTem, result) {
  dbConn.query("INSERT INTO temas SET ?", newTem, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

temas.findById = function (id, result) {
  dbConn.query("SELECT * FROM temas WHERE id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

temas.findAll = function (result) {
  dbConn.query("SELECT * FROM temas", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log('temas:', res);
      result(null, res);
    }
  });
};

temas.update = function (id, temas, result) {
  dbConn.query("UPDATE temas SET nombre=?, descripcion=? WHERE id = ?", 
    [temas.nombre, temas.descripcion, id], 
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

temas.delete = function (id, result) {
  dbConn.query("DELETE FROM temas WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = temas;