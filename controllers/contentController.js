data = require('../models/contentModel');

exports.index = function(req, res) {
  res.render('index',{data:data.content.index});
};

exports.about = function(req, res) {
  res.render('about',{data:data.content.about});
};

exports.objectives = function(req, res) {
  res.render('about/objectives',{data:data.content.about.objectives});
};

exports.history = function(req, res) {
  res.render('about/objectives',{data:data.content.about.history});
};

exports.committee = function(req, res) {
  res.render('about/volunteers',{data:data.content.about.committee});
};

exports.volunteers = function(req, res) {
  res.render('about/volunteers',{data:data.content.about.volunteers});
};

exports.keydates = function(req, res) {
  res.render('keydates',{data:data.content.keydates});
};

