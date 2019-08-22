const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 3000;


const mysql = require('mysql');
// connection configurations
var mc = mysql.createConnection({
    host     : '72.249.55.31',
    user     : 'inovaced_gas',
    password : 'mrV75QmUBzRS',
    database : 'inovaced_gas'
});
 
// connect to database
mc.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appUsersRoutes'); //importing route
routes(app); //register the route