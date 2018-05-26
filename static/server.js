const express     = require('express')
const mime        = require('mime-types')
const serveStatic = require('serve-static')
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
})

app.use(serveStatic(__dirname, {
  maxAge: '1y',
  setHeaders: (res, path) => {
    const mimeType = mime.lookup(path)
    if (mimeType === 'text/html' || mimeType === 'application/json') {
      res.setHeader('Cache-Control', 'public, max-age=0')
    }
  }
}))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.listen(app.get('port'), () =>
  console.log('Listening on port', app.get('port'))
)

exports = module.exports = app
