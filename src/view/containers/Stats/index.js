import React, { Component } from 'react'
import { connect }          from 'react-redux'
import payloadStates        from 'Constants/PayloadStates'
import asyncActions         from 'Actions/async'
import syncActions          from 'Actions/sync'
import Scoreboard           from 'Components/Scoreboard'
import User                 from 'Components/User'

const { LOGGED_IN, INITIAL_STATE, RESOLVED } = payloadStates
const { setFocusedUser } = syncActions
const {
  changeScoreView,
  fetchEarnedCards,
  fetchFocusedUser,
  fetchQuery,
  fetchStats
} = asyncActions


const mapStateToProps = ({
  auth,
  focusedUser,
  scoreView,
  search,
  users
}) => ({
  auth,
  focusedUser,
  scoreView,
  search,
  users
})

const mapDispatchToProps = {
  changeScoreView,
  fetchEarnedCards,
  fetchFocusedUser,
  fetchStats,
  fetchQuery,
  setFocusedUser
}

class Container extends Component {
  componentWillMount() {
    const {
      auth,
      fetchFocusedUser,
      fetchStats,
      match: { params: { handle } },
      scoreView
    } = this.props

    fetchStats(scoreView)
    if (handle) fetchFocusedUser(handle)
  }

  componentWillReceiveProps({
    match: { params: { handle } },
    fetchEarnedCards,
    focusedUser,
    focusedUser: { earnedCardsState, state: userState }
  }) {
    if (handle && userState === RESOLVED && earnedCardsState === INITIAL_STATE) {
      const ids = focusedUser.data.allTimeStats.correct.map(card => card.cardId)
      fetchEarnedCards(ids)
    }
  }

  render() {
    const {
      fetchFocusedUser,
      focusedUser,
      match: { params: { handle } },
      users,
      ...props
    } = this.props

    if (!handle)
      return <Scoreboard users={users[this.props.scoreView]} {...props} />

    return <User user={focusedUser} handleParam={handle} {...props} />
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
