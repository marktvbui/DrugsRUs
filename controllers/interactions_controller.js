var db = require('../models');

module.exports = function(app) {
  app.get('/interactions', function(req, res) {
    console.log('interactions controller hit');
    console.log(req.body);
    db.Interactions.findAll({
      where : {
        med1_name: req.body.med1_name,
        med2_name: req.body.med2_name
      }
    }).then(function(results) {
      var interactionsResult = results;
      // return interactionsResult;
      var interactions = {
        interactionResults: results.interactions
      };
      return interactionsResult;
      // db.Medicine.findAll({}).then(function(results){
      //   console.log(results);
      //   var hbsObject = {
      //   Medicine: results
      // };
        // res.render('user', interactions); this works to send the user info over
        res.render('/', interactions);
    });
  });
};