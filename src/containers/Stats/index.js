import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { fetchScoreboard } from 'Actions/async'
import { setScoreView, setSearchQuery } from 'Actions/sync'
import Scoreboard from 'Components/Scoreboard'
import User from 'Components/User'

const mapStateToProps = (state) => ({
  users: state.users,
  scoreView: state.scoreView,
  search: state.search
})

const mapDispatchToProps = {
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
      users,
      ...props
    } = this.props

    if (!users)
      return <h1>Loading...</h1>

    if (handle) {
      const user = props.users.find(userObj => userObj.handle === handle)
      return <User user={user} {...props} />
    }

    let filteredUsers = users
    let { search, scoreView } = this.props
    switch (scoreView) {
      case 0:
        filteredUsers.sort((a, b) => b.weeklyScore - a.weeklyScore)
        break
      case 1:
        filteredUsers.sort((a, b) => b.monthlyScore - a.monthlyScore)
        break
      default:
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
