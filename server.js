const express = require('express');
const app = express();
const path = require('path');

app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.resolve(__dirname, 'dist')));

app.get('*', (req, res) =>
  res.sendFile(index.html)
);

app.listen(app.get('port'), () =>
  console.log('Listening on port', app.get('port'))
);

exports = module.exports = app;
