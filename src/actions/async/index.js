import focusedUser   from './focusedUser'
import liveQuestions from './liveQuestions'
import scoreView     from './scoreView'
import searchQuery   from './searchQuery'
import stats         from './stats'

export default ({
  ...focusedUser,
  ...liveQuestions,
  ...scoreView,
  ...searchQuery,
  ...stats
})
