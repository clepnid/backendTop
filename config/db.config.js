'use strict';

const dotenv = require('dotenv').config();
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

const mode = 'lcal'
var dbConn;
const caPath = path.join(__dirname, 'isrgrootx1.pem');


//local mysql db connection
if (mode === 'local') {
  dbConn = mysql.createConnection({
    host     : process.env.MYSQL_IP || 'localhost',
    user     : process.env.MYSQL_USER ||  'root',
    password : process.env.MYSQL_PASSWORD ||  '',
    database : process.env.MYSQL_DB ||  'tfg'
  });
}else{
  dbConn = mysql.createConnection({
    host     : process.env.TIDBCLOUD_MYSQL_IP || 'localhost',
    port     : process.env.TIDBCLOUD_MYSQL_PORT ||  '',
    user     : process.env.TIDBCLOUD_MYSQL_USER ||  'root',
    password : process.env.TIDBCLOUD_MYSQL_PASSWORD ||  '',
    database : process.env.TIDBCLOUD_MYSQL_DB ||  'tfg',
    ssl: {
         ca: fs.readFileSync(caPath)
     }
  });
}


dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;