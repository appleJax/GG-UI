import focusedUser   from './focusedUser'
import liveQuestions from './liveQuestions'
import navOptions    from './navOptions'
import scoreView     from './scoreView'
import searchQuery   from './searchQuery'
import stats         from './stats'

export default ({
  ...focusedUser,
  ...liveQuestions,
  ...navOptions,
  ...scoreView,
  ...searchQuery,
  ...stats
})
