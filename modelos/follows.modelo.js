'use strict';

var dbConn = require('./../config/db.config');

var follows = function(follows){
  this.follower = follows.follower;
  this.following = follows.following;
};

follows.create = function (newFol, result) {
  dbConn.query("INSERT INTO follows SET ?", newFol, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

follows.findById = function (id, result) {
  dbConn.query("SELECT * FROM follows WHERE id = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

follows.findAll = function (result) {
  dbConn.query("SELECT * FROM follows", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log('follows:', res);
      result(null, res);
    }
  });
};

follows.update = function (id, follows, result) {
  dbConn.query("UPDATE follows SET follower=?, following=? WHERE id = ?", 
    [follows.follower, follows.following, id], 
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

follows.delete = function (id, result) {
  dbConn.query("DELETE FROM follows WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = follows;