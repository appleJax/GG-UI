import auth          from './auth'
import countdown     from './countdown'
import decks         from './decks'
import focusedUser   from './focusedUser'
import deckTitles    from './deckTitles'
import liveQuestions from './liveQuestions'
import navOptions    from './navOptions'
import recentAnswers from './recentAnswers'
import users         from './users'
import downloadLastUpdated from './downloadLastUpdated'

export default ({
  ...auth,
  ...countdown,
  ...decks,
  ...downloadLastUpdated,
  ...focusedUser,
  ...deckTitles,
  ...liveQuestions,
  ...navOptions,
  ...recentAnswers,
  ...users
})
