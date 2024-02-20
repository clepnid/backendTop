'use strict';

const dotenv = require('dotenv').config();
const mysql = require('mysql');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : process.env.MYSQL_IP || 'localhost',
  user     : process.env.MYSQL_USER ||  'root',
  password : process.env.MYSQL_PASSWORD ||  '',
  database : process.env.MYSQL_DB ||  'tfg'
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;