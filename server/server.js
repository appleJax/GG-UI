import express  from 'express'
import session  from 'express-session'
import passport from './passport'
import path     from 'path'

const app = express()
const { SESSION_SECRET } = process.env

app.set('port', (process.env.PORT || 8080))
app.use(express.static(path.resolve(__dirname)))
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.get('/login', passport.authenticate('twitter'))

app.get('/oauth_callback',
  passport.authenticate('twitter'),
  (req, res) => {
    req.session.user = req.user
    res.redirect('/')
  }
)

app.get('/user', (req, res) =>
  res.json(req.session.user || null)
)

app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) console.error(err)
    res.json(null)
  })
})

app.get('*', (req, res) =>
  res.sendFile(__dirname + '/index.html')
)

app.listen(app.get('port'), () =>
  console.log('Listening on port', app.get('port'))
)

export default app
