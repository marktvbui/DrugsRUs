var db = require('../models');

module.exports = function(app) {
  app.get('/medicine', function(req, res) {
    db.Medicine.findAll({}).then(function(data) {
      var hbsObject = {
        Medicine: data
      };
      res.render('user', hbsObject);
    });
  });

  app.post('/medicine', function(req, res) {
    db.Medicine.create(
      // [
      // 'medicine'
      // ], [
      // req.body.medicine_name
      // ],
      { medicine_name: req.body.medicine_name },
      function() {
        res.redirect('/');
    });
  });

  app.put('/medicine/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    db.Medicine.update({
        medicine_name: req.body.medicine_name
      }, condition, function(){
        res.redirect('/medicine');
    });
  });

  app.delete('/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    db.Medicine.destroy(condition, function() {
      res.redirect('/medicine');
    });
  });

};