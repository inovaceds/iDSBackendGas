module.exports = function(app) {
  var users = require("./../controller/appUsersController");

  app
    .route("/users")
    .get(users.getAllUsers);

  // app
  //   .route("/users/:userId")
  //   .get(users.getUserById)
  //   .put(users.updateUserById)
  //   .delete(users.deleteUserById);
};
