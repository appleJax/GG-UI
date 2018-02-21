import focusedUser   from './focusedUser'
import liveQuestions from './liveQuestions'
import recentAnswers from './recentAnswers'
import scoreView     from './scoreView'
import searchQuery   from './searchQuery'
import stats         from './stats'

export default ({
  ...focusedUser,
  ...liveQuestions,
  ...recentAnswers,
  ...scoreView,
  ...searchQuery,
  ...stats
})
