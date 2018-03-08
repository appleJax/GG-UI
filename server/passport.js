import passport           from 'passport'
import { Strategy }       from 'passport-twitter'
import { ajax, tryCatch } from 'Utils'
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
    const params = {
      params: { twitterUser: profile._json }
    }
    let user = await tryCatch(
      ajax.get(`/signin/${profile.id}`, params)
    )

    return done(null, user);
  })
)

passport.serializeUser(
  (user, done) => done(null, user.userId)
)

passport.deserializeUser(
  async (userId, done) => {
    const user = await tryCatch(
      ajax.get(`/user/${userId}`)
    )
    done(null, user);
  }
)

export default passport
