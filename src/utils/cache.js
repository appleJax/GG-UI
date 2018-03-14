import payloadStates from 'Constants/PayloadStates'

const { LOGGED_IN, RESOLVED } = payloadStates


export function isCacheInvalid(
  { recentAnswers },
  { recentAnswers: nextRecentAnswers }
) {

  if (
    recentAnswers.state     !== RESOLVED &&
    nextRecentAnswers.state === RESOLVED
  ) return true

  if (
    recentAnswers.state     === RESOLVED &&
    nextRecentAnswers.state === RESOLVED &&
    mostRecent(recentAnswers) !== mostRecent(nextRecentAnswers)
  ) return true

  return false

}

export function refreshCache({
  auth,
  focusedUser,
  users: {
    allTimeStats,
    monthlyStats,
    weeklyStats
  },
  fetchFocusedUser,
  fetchLiveQuestions,
  fetchStats,
  updateUserDetails
}) {

  const firstPage = 1

  if (auth.state === LOGGED_IN)
    updateUserDetails()

  if (focusedUser.stats.state === RESOLVED)
    fetchFocusedUser(focusedUser.stats.data.handle)

  if (allTimeStats.state === RESOLVED) {
    fetchStats(firstPage, 'allTimeStats')
  }

  if (monthlyStats.state === RESOLVED)
    fetchStats(firstPage, 'monthlyStats')

  if (weeklyStats.state === RESOLVED)
    fetchStats(firstPage, 'weeklyStats')

  fetchLiveQuestions()

}


// private

function mostRecent(recentCards) {
  return recentCards.data[0].cardId
}
