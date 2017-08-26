var db = require('../models');

module.exports = function(app) {
  app.get('/interactions', function(req, res) {
    // var med1 = req.query.med1_name;
    // var med2 = req.query.med2_name;
    // console.log(req.query.med1_name);
    // console.log(req.query.med2_name);
    var med1 = 'MONOPRIL';
    var med2 = 'KLORVESS';
    console.log('interactions controller hit');
    db.Interactions.findAll({
      where : {
        med1_name: med1,
        med2_name: med2
      }
    }).then(function(results) {
      // console.log(results[0].dataValues.interaction);
    //   if (results.length === 0){
    //     res.send('no interactions found')
    //   } else {
    //   var interactions = {
    //     interactionsResult: results[0].dataValues.interaction
    //   };
    //   console.log('------------------------');
    //   res.send(interactions);
    // }
    var interactions = {
        interactionsResult: results[0].dataValues.interaction
      };
      console.log('------------------------');
      console.log(interactions);
      res.send(interactions);
    });
  });
};