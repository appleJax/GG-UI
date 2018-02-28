import passport     from 'passport'
import { Strategy } from 'passport-twitter'
import { ajax, tryCatch } from 'Utils'
const {
  TWITTER_KEY,
  TWITTER_SECRET
} = process.env;

passport.use(
  new Strategy({
    consumerKey:    TWITTER_KEY,
    consumerSecret: TWITTER_SECRET,
    callbackURL: 'http://127.0.0.1:8080/oauth_callback'
  },
  async (token, tokenSecret, profile, done) => {
    console.log('Twitter profile:', profile);
    const user = await tryCatch(
      ajax.get(`/user/${profile.id}`)
    );
    return done(null, user);
  })
);

passport.serializeUser(
  (user, done) => {
    console.log('Serializing:', user)
    done(null, user.id)
  }
);

passport.deserializeUser(
  async (id, done) => {
    console.log('Deserializing:', id)
    const user = await tryCatch(
      ajax.get(`/user/${profile.id}`)
    );
    done(null, user);
  }
);

export default passport;
