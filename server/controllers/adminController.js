const mongoose = require("mongoose");
const Admin = mongoose.model("Admin");
const passport = require("passport");

exports.register = async (req, res) => {
  try {
    Admin.register(
      new Admin({ username: req.body.username }),
      req.body.password,
      (e, admin) => {
        if (e) {
          console.log(e);
          res.status(500).json(e.message);
        } else {
          passport.authenticate("local")(req, res, function () {
            res.json(admin);
          });
        }
      }
    );
  } catch (e) {
    res.status(500).json(e.message);
  }
};

exports.login = (req, res) => {
  try {
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: "Failed Login!",
      successRedirect: "/",
    });
    res.status(200).json("successfully logged in");
  } catch (e) {
    console.log(e);
  }
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.verifyAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/admin");
};
