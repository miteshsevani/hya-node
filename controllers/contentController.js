data = require('../models/contentModel');

exports.index = function(req, res) {
  res.render('index',{data:data.content.index});
};

exports.about = function(req, res) {
  res.render('about',{data:data.content.about});
};

exports.keydates = function(req, res) {
  res.render('keydates',{data:data.content.keydates});
};

exports.gallery = function(req, res) {
  res.render('gallery',{data:data.content.gallery});
};

exports.downloads = function(req, res) {
  res.render('downloads',{data:data.content.downloads});
};