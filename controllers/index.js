module.exports = function(app) {
  require('./meds_controller.js')(app);
  require('./users_controller.js')(app);
  require('./interactions_controller.js')(app);
};
