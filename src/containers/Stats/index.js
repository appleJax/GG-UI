import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { fetchScoreboard, fetchFocusedUser } from 'Actions/async'
import { setScoreView, setSearchQuery } from 'Actions/sync'
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
  fetchScoreboard,
  setScoreView,
  setSearchQuery
}

class Container extends Component {
  componentWillMount() {
    this.props.fetchScoreboard()
  }

  render() {
    const {
      match: { params: { handle } },
      fetchFocusedUser,
      focusedUser,
      users,
      ...props
    } = this.props

    if (!users)
      return <h1>Loading...</h1>

    if (handle) {
      if (!focusedUser || focusedUser.handle !== handle) {
        const user = users.find(userObj => userObj.handle === handle)
        if (!user)
          return <h1>User @{handle} Not Found</h1>

        fetchFocusedUser(user)
        return <h1>Loading...</h1>
      }

      return <User user={focusedUser} {...props} />
    }

    let filteredUsers = users
    let { search, scoreView } = this.props
    switch (scoreView) {
      case 0:
        break
      case 1:
        filteredUsers.sort((a, b) => b.monthlyStats.score - a.monthlyStats.score)
        break
      default:
        filteredUsers.sort((a, b) => b.allTimeStats.score - a.allTimeStats.score)
        break
    }

    search = search.replace(/@/g, '').trim()
    const regExp = new RegExp(search, 'i')
    filteredUsers = users.reduce(
      (filtered, user, index) => {
        return regExp.test(user.handle)
          ? [...filtered, { ...user, rank: (index + 1) }]
          : filtered
    }, [])

    return <Scoreboard users={filteredUsers} {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
