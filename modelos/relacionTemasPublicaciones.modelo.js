'use strict';

var dbConn = require('./../config/db.config');

var relacionTemasPublicaciones = function(relacionTemasPublicaciones){
  this.idPublicacion = relacionTemasPublicaciones.idPublicacion;
  this.idTema = relacionTemasPublicaciones.idTema;
};

relacionTemasPublicaciones.create = function (newRel, result) {
  dbConn.query("INSERT INTO relacionTemasPublicaciones SET ?", newRel, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

relacionTemasPublicaciones.findById = function (id, result) {
  dbConn.query("SELECT * FROM relacionTemasPublicaciones WHERE id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

relacionTemasPublicaciones.findAll = function (result) {
  dbConn.query("SELECT * FROM relacionTemasPublicaciones", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log('relacionTemasPublicaciones:', res);
      result(null, res);
    }
  });
};

relacionTemasPublicaciones.update = function (id, relacionTemasPublicaciones, result) {
  dbConn.query("UPDATE relacionTemasPublicaciones SET idPublicacion=?, idTema=? WHERE id = ?", 
    [relacionTemasPublicaciones.idPublicacion, relacionTemasPublicaciones.idTema, id], 
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

relacionTemasPublicaciones.delete = function (id, result) {
  dbConn.query("DELETE FROM relacionTemasPublicaciones WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = relacionTemasPublicaciones;