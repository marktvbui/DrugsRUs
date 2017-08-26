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
      console.log('++++++++++++++++++++++++');
      console.log(results[0].dataValues.interaction);
      // return interactionsResult;
      var interactionsResult;
      var interactions = {
        interactionsResult: results
      };
      console.log('------------------------');
      console.log(interactions);

        res.render('index', interactions);
    });
  });
};