import auth          from './auth'
import countdown     from './countdown'
import decks         from './decks'
import focusedUser   from './focusedUser'
import gameTitles    from './gameTitles'
import liveQuestions from './liveQuestions'
import navOptions    from './navOptions'
import recentAnswers from './recentAnswers'
import scoreView     from './scoreView'
import searchQuery   from './searchQuery'
import stats         from './stats'

export default ({
  ...auth,
  ...countdown,
  ...decks,
  ...focusedUser,
  ...gameTitles,
  ...liveQuestions,
  ...navOptions,
  ...recentAnswers,
  ...scoreView,
  ...searchQuery,
  ...stats
})
