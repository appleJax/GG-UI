const express     = require('express')
const compression = require('compression')
const path        = require('path')

const app = express()
app.use(compression({ level: 4 }))

app.set('port', (process.env.PORT || 8080))

// Enable reverse proxy support in Express. This causes the
// the "X-Forwarded-Proto" header field to be trusted so its
// value can be used to determine the protocol.
app.enable('trust proxy')

app.use ((req, res, next) => {
  if (req.secure) {
    next()
  } else {
    res.redirect('https://' + req.headers.host + req.url)
  }
});

app.use(express.static(path.resolve(__dirname)))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(app.get('port'), () =>
  console.log('Listening on port', app.get('port'))
)

exports = module.exports = app
