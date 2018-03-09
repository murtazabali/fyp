var passport = require('passport');
var User = require('../models/User');
var Project = require('../models/Project');


exports.ensureAuthenticated = function(req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/login');
    }
  };

exports.createProjectGet = function(req,res){
    res.render('project/project.ejs',{
        title: 'Create Project'
      });
};