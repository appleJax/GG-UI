const express = require('express');
//const passport = require('passport');
const app = express();
const path = require('path');

const { SESSION_SECRET } = process.env;

app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.resolve(__dirname)));

//app.use(passport.initialize());
//app.use(passport.sessions());


// app.get('/login', passport.authenticate('twitter',
//   { successRedirect: 'http://127.0.0.1:8080/' }
// ));
//
// app.get('/oauth_callback',
//   passport.authenticate('twitter'),
//   (req, res) => {
//     console.log('callback endpoint hit...');
//     res.redirect('http://127.0.0.1:8080/')
// });


app.get('*', (req, res) =>
  res.sendFile(__dirname + '/index.html')
);

app.listen(app.get('port'), () =>
  console.log('Listening on port', app.get('port'))
);

exports = module.exports = app;
