import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { changeScoreView, fetchFocusedUser, fetchQuery, fetchStats } from 'Actions/async'
import Scoreboard from 'Components/Scoreboard'
import User from 'Components/User'

const mapStateToProps = (state) => ({
  focusedUser: state.focusedUser,
  scoreView: state.scoreView,
  search: state.search,
  users: state.users
})

const mapDispatchToProps = {
  fetchFocusedUser,
  fetchStats,
  changeScoreView,
  fetchQuery
}

class Container extends Component {
  componentWillMount() {
    this.props.fetchStats(this.props.scoreView)
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
      if (!focusedUser || focusedUser.handle !== handle) {
        fetchFocusedUser(handle)
        return <h1>Loading...</h1>
      }

      return <User user={focusedUser} {...props} />
    }

    if (!users[this.props.scoreView])
      return <h1>Loading...</h1>

    let filteredUsers = users[this.props.scoreView]

    // TODO: query database w/ regex
    let { search } = this.props
    search = search.replace(/@/g, '').trim()

    return <Scoreboard users={filteredUsers} {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
