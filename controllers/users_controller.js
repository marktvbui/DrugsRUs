var db = require("../models");

module.exports = function(app) {
  app.get('/', function(req, res) {
    db.User.findAll({}).then(function(results){
      var hbsObject = {
      user: results
    };
      res.render('index', hbsObject);
    });
  });

  app.post('/', function(req, res) {
    db.User.findOrCreate({
      where: {
      email: req.body.email
      },
      defaults: {
        name: req.body.name,
        email: req.body.email
      }
    }).then(
      function(){
        res.redirect('/user');
      });
  });

  app.get('/user', function(req, res) {
    db.User.findAll({
      include: {
        model: db.Medicine
      }
    }).then(function(data){
        res.send(data);
      // });
    });
  });
};
