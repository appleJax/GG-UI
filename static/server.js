const express = require('express')
const path = require('path')

const app = express()

app.set('port', (process.env.PORT || 8080))
app.use(express.static(path.resolve(__dirname)))

app.get('*', (req, res) =>
  res.sendFile(__dirname + '/index.html')
)

app.listen(app.get('port'), () =>
  console.log('Listening on port', app.get('port'))
)

exports = module.exports = app
