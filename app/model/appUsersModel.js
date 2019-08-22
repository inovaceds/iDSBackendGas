"user strict";
var sql = require("../model/db");

var User = function(user) {
  this.Name = user.Name;
  this.LastName = user.LastName;
  this.SecondLastname = user.SecondLastname;
  this.Telephone = user.Telephone;
  this.Email = user.Email;
};

User.getAllUsers = function(result) {
  sql.query("Select * from Users", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Users : ", res);
      result(null, res);
    }
  });
};

module.exports= User;
