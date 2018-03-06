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
  fetchStats,
  updateUserDetails
}) {

  if (auth.state === LOGGED_IN)
    updateUserDetails()

  if (focusedUser.state === RESOLVED)
    fetchFocusedUser(focusedUser.data.handle)

  if (allTimeStats.state === RESOLVED) {
    fetchStats('allTimeStats')
  }

  if (monthlyStats.state === RESOLVED)
    fetchStats('monthlyStats')

  if (weeklyStats.state === RESOLVED)
    fetchStats('weeklyStats')

}


// private

function mostRecent(recentCards) {
  return recentCards.data[0].cardId
}
