import auth          from './auth'
import countdown     from './countdown'
import decks         from './decks'
import focusedUser   from './focusedUser'
import deckTitles    from './deckTitles'
import liveQuestions from './liveQuestions'
import navOptions    from './navOptions'
import recentAnswers from './recentAnswers'
import users         from './users'

export default ({
  ...auth,
  ...countdown,
  ...decks,
  ...focusedUser,
  ...deckTitles,
  ...liveQuestions,
  ...navOptions,
  ...recentAnswers,
  ...users
})
