import passport           from 'passport'
import { Strategy }       from 'passport-twitter'
import { ajax, tryCatch } from 'Utils'
import formatUser         from './formatUser'
const {
    TWITTER_KEY,
    TWITTER_SECRET,
    APP_URL
} = process.env

passport.use(
  new Strategy({
    consumerKey:    TWITTER_KEY,
    consumerSecret: TWITTER_SECRET,
    callbackURL: `${APP_URL}/oauth_callback`
  },
  async (token, tokenSecret, profile, done) => {
    let user = await tryCatch(
      ajax.get(`/user/${profile.id}`)
    )

    if (!user) {
      user = formatUser(profile)
      ajax.post('/users/new', user)
    }

    return done(null, user);
  })
)

passport.serializeUser(
  (user, done) => {
    console.log('Serializing:', user)
    done(null, user.userId)
  }
)

passport.deserializeUser(
  async (userId, done) => {
    console.log('Deserializing:', userId)
    const user = await tryCatch(
      ajax.get(`/user/${userId}`)
    )
    done(null, user);
  }
)

export default passport
