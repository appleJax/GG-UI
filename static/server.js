const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.resolve(__dirname)));

app.get('*', (req, res) =>
  res.sendFile(__dirname + '/index.html')
);

app.listen(app.get('port'), () =>
  console.log('Listening on port', app.get('port'))
);

exports = module.exports = app;
