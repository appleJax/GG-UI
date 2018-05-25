import React, { Component } from 'react'
import Loadable             from 'react-loadable'
import connect              from 'react-redux/es/connect/connect'
import asyncActions         from 'Actions/async'
import syncActions          from 'Actions/sync'
import Spinner              from 'Components/Spinner'

const Scoreboard = Loadable({
  loader: () => import('Components/Scoreboard'),
  loading: Spinner
})
const User = Loadable({
  loader: () => import('Components/User'),
  loading: Spinner
})


const { setFocusedUser } = syncActions
const {
  setScoreView,
  fetchFocusedUser,
  fetchQuery,
  fetchStats
} = asyncActions


const mapStateToProps = ({
  auth,
  focusedUser: { stats },
  scoreView,
  search,
  users
}) => ({
  auth,
  userStats: stats,
  scoreView,
  search,
  users
})

const mapDispatchToProps = {
  setScoreView,
  fetchFocusedUser,
  fetchStats,
  fetchQuery,
  setFocusedUser
}

class Container extends Component {

  componentDidMount() {
    const {
      fetchFocusedUser,
      fetchStats,
      match: { params: { handle } },
      scoreView
    } = this.props

    const firstPage = 1
    fetchStats(firstPage, scoreView)
    if (handle) fetchFocusedUser(handle)
  }

  render() {
    const {
      fetchFocusedUser,
      userStats,
      match: { params: { handle } },
      users,
      ...props
    } = this.props

    if (!handle)
      return (
        <Scoreboard
          users={users[this.props.scoreView]}
          {...props}
        />
      )

    return (
      <User
        user={userStats}
        handleParam={handle}
        {...props}
      />
    )
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
