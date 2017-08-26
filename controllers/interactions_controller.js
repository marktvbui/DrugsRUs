var db = require('../models');

module.exports = function(app) {
  app.get('/interactions', function(req, res) {
    var med1 = 'Monopril';
    var med2 = 'Klorvess';
    console.log('interactions controller hit');
    db.Interactions.findAll({
      where : {
        med1_name: med1,
        med2_name: med2
      }
    }).then(function(results) {
      console.log('****************');
      console.log(results);
      console.log('++++++++++++++++++++++++');
      console.log(results.interactions);
      // return interactionsResult;
      // var interactions = {
      //   interactionResults: results.interactions
      // };
      // return interactionsResult;
      // db.Medicine.findAll({}).then(function(results){
      //   console.log(results);
      //   var hbsObject = {
      //   Medicine: results
      // };
        // res.render('user', interactions); this works to send the user info over
        // res.render('/', interactions);
    });
  });
};