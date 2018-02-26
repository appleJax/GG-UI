import countdown     from './countdown'
import focusedUser   from './focusedUser'
import liveQuestions from './liveQuestions'
import navOptions    from './navOptions'
import recentAnswers from './recentAnswers'
import scoreView     from './scoreView'
import searchQuery   from './searchQuery'
import stats         from './stats'

export default ({
  ...countdown,
  ...focusedUser,
  ...liveQuestions,
  ...navOptions,
  ...recentAnswers,
  ...scoreView,
  ...searchQuery,
  ...stats
})
