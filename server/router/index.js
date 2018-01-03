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

  app.get('/about', requireAuth, function (req, res, next) {
    res.send({ content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga molestias, eius numquam quibusdam expedita excepturi magnam explicabo perferendis pariatur ipsum delectus? Perspiciatis, cupiditate et. Quasi hic nihil eum soluta amet." });
  });
  
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};
