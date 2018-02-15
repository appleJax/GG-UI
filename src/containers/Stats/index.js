import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { setFocusedUser } from 'Actions/sync'
import {
  changeScoreView,
  fetchEarnedCards,
  fetchFocusedUser,
  fetchQuery,
  fetchStats
} from 'Actions/async'
import Scoreboard from 'Components/Scoreboard'
import User from 'Components/User'

const mapStateToProps = (state) => ({
  focusedUser: state.focusedUser,
  scoreView: state.scoreView,
  search: state.search,
  users: state.users
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
    const handle = this.props.match.params.handle
    this.props.fetchStats(this.props.scoreView)
    if (handle)
      this.props.fetchFocusedUser(handle)
  }

  render() {
    const {
      match: { params: { handle } },
      fetchFocusedUser,
      focusedUser,
      users,
      ...props
    } = this.props

    if (handle) {
      return <User user={focusedUser} handleParam={handle} {...props} />
    }

    return <Scoreboard users={users[this.props.scoreView]} {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
