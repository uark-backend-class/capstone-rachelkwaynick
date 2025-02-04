require('dotenv').config();
require('./db');

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const exphbs = require('express-handlebars');

const router = require('./routes');

const User = require('./db').User;

const app = express();



app.use(session({ secret: 'funky monkey' }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static('public'));
app.use((req, res, next) => {
  res.locals.user = req.user;
  // res.locals.budget = req.budget;
  next();
});
app.use(router);



// app.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept',
//   );
//   next();
// });

const port = 3000;

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
