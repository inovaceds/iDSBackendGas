"use strict";

var User = require("../model/appUsersModel.js");

exports.getAllUsers = function(req, res) {
  User.getAllUsers(function(err, users) {
    if (err) res.send(err);
    res.send(users);
  });
};
