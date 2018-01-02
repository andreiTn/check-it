const Authentication = require("../controllers/authentication");
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });
// need to send some data
module.exports = function (app) {
  app.get('/', requireAuth, function (req, res, next) {
    res.send({ message: "Success" });
  });
  
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};