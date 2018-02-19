import React, { Component } from 'react'
import { connect } from 'react-redux'
import payloadStates from 'Constants/PayloadStates'
import syncActions  from 'Actions/sync'
import asyncActions from 'Actions/async'
import Scoreboard from 'Components/Scoreboard'
import User       from 'Components/User'

const { INITIAL_STATE, RESOLVED } = payloadStates
const { setFocusedUser } = syncActions
const {
  changeScoreView,
  fetchEarnedCards,
  fetchFocusedUser,
  fetchQuery,
  fetchStats
} = asyncActions


const mapStateToProps = (state) => ({
  focusedUser: state.focusedUser,
  scoreView:   state.scoreView,
  search:      state.search,
  users:       state.users
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

  shouldComponentUpdate(nextProps, nextState) {

  }

  render() {
    const {
      fetchFocusedUser,
      focusedUser,
      match: { params: { handle } },
      users,
      ...props
    } = this.props

    return (handle)
      ? <User user={focusedUser} handleParam={handle} {...props} />
      : <Scoreboard users={users[this.props.scoreView]} {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
