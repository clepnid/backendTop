'use strict';

const User = require('./../modelos/usuarios.modelo');
const bcrypt = require("bcrypt");

exports.findAll = function(req, res) {
  User.findAll(function(err, user) {
    console.log('controller');
    if (err)
      res.send(err);
    console.log('res', user);
    res.send(user);
  });
};

exports.getInfo = function(req, res) {
  User.findAll(function(err, user) {
    res.status(200).send({ user: req.userToken });
  });
};

exports.create = async function(req, res) {
  const new_user = new User(req.body);
  // Manejar error de campo nulo
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    //encriptar password
    const salt = await bcrypt.genSalt(10);
    new_user.password = await bcrypt.hash(new_user.password, salt);
    User.create(new_user, function(err, userId) {
      if (err)
        res.send(err);
      if (userId != null ) {
          //añadir roles a el nuevo usuario
          User.createRolesById(userId,'admin', function(err, user) {
            if (err)
              res.send(err);
          });
          User.createRolesById(userId,'viewer', function(err, user) {
            if (err)
              res.send(err);
          });
          User.createRolesById(userId,'editor', function(err, user) {
            if (err)
              res.send(err);
          });
            res.json({ error:false, message:"Usuario añadido exitosamente!", data:userId });
        }
    });
  }
};

exports.findById = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.getRolesById = function(id, req, res) {
  User.getRolesById(id, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.getFollowsById = function(id, req, res) {
  User.getFollowsById(id, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.createFollowsById = function(idFollower, idFollowing, req, res) {
  User.createFollowsById(idFollower, idFollowing, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.deleteFollowsById = function(idFollower, idFollowing, req, res) {
  User.deleteFollowsById(idFollower, idFollowing, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Por favor, proporcione todos los campos requeridos' });
  } else {
    User.update(req.params.id, new User(req.body), function(err, user) {
      if (err)
        res.send(err);
      res.json({ error:false, message: 'Usuario actualizado exitosamente' });
    });
  }
};

exports.delete = function(req, res) {
  User.delete(req.params.id, function(err, user) {
    if (err)
      res.send(err);
    res.json({ error:false, message: 'Usuario eliminado exitosamente' });
  });
};