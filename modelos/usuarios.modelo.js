'use strict';

var dbConn = require('./../config/db.config');

var usuarios = function(usuarios){
  this.nombre = usuarios.nombre;
  this.email = usuarios.email;
  this.password = usuarios.password;
  this.emailVerificacion = usuarios.emailVerificacion;
  this.descripcion = usuarios.descripcion;
  this.avatar_foto = usuarios.avatar_foto;
  this.creado_en = new Date();
  this.modificado_en = new Date();
};

usuarios.create = function (newUsr, result) {
  dbConn.query("INSERT INTO usuarios SET ?", newUsr, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res.insertId);
    }
  });
};

usuarios.findByIdPass = function (id, pass, result) {
  dbConn.query("SELECT * FROM usuarios WHERE id = ? AND password = ?", [id, pass], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

usuarios.findById = function (id, result) {
  dbConn.query("SELECT * FROM usuarios WHERE id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

usuarios.findByIdPass = function (id, pass, result) {
  dbConn.query("SELECT * FROM usuarios WHERE id = ? AND password = ?", [id, pass], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

usuarios.findByEmail = function (email, result) {
  dbConn.query("SELECT * FROM usuarios WHERE email = ?", email, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};


usuarios.getRolesById = function (id, result) {
  dbConn.query("SELECT r.nombre FROM usuarios u JOIN relacionesRolUsuario rr ON u.id = rr.idUsuario JOIN roles r ON rr.idRol = r.id WHERE u.id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};


usuarios.getFollowsById = function (id, result) {
  dbConn.query("SELECT u.id, u.nombre, u.email FROM usuarios u JOIN follows f ON u.id = f.follower WHERE f.following = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

usuarios.createFollowsById = function (idFollower, idFollowing, result) {
  dbConn.query("INSERT INTO follows (follower, following) VALUES (?, ?)", [idFollower, idFollowing], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

usuarios.deleteFollowsById = function (idFollower, idFollowing, result) {
  dbConn.query("DELETE FROM follows WHERE follower = ? AND following = ?", [idFollower, idFollowing], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

usuarios.createRolesById = function (id, nombre, result) {
  dbConn.query("INSERT INTO relacionesRolUsuario (idUsuario, idRol) SELECT ?, id  FROM roles  WHERE nombre = ?", [id, nombre], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

usuarios.findAll = function (result) {
  dbConn.query("SELECT * FROM usuarios", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

usuarios.update = function (id, usuarios, result) {
  dbConn.query("UPDATE usuarios SET nombre=?, email=?, password=?, emailVerificacion=?, descripcion=?, avatar_foto=? WHERE id = ?", 
    [usuarios.nombre, usuarios.email, usuarios.password, usuarios.emailVerificacion, usuarios.descripcion, usuarios.avatar_foto, id], 
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

usuarios.delete = function (id, result) {
  dbConn.query("DELETE FROM usuarios WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = usuarios;