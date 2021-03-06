import React, { Component } from 'react'
import connect              from 'react-redux/es/connect/connect'
import { withRouter }       from 'react-router-dom'
import { withStyles }       from 'UI/styles'
import asyncActions         from 'Actions/async'
import syncActions          from 'Actions/sync'
import payloadStates        from 'Constants/PayloadStates'
import Nav                  from './component'
import styles               from './styles'
import {
  isCacheInvalid,
  refreshCache
} from 'Utils/cache'

const { LOGGED_IN } = payloadStates
const [{
  fetchCountdown,
  fetchCurrentUser,
  fetchFocusedUser,
  fetchLiveQuestions,
  fetchRecentAnswers,
  fetchStats,
  requestLogout,
  updateUserDetails
}, {
  authTransition,
  closeNavOptions,
  decrementCountdown,
  openNavOptions,
  setFocusedUser
}] = [ asyncActions, syncActions ]

class Container extends Component {
  componentDidMount() {
    this._timer = setInterval(this.update.bind(this), 1000)

    if (this.props.auth.state !== LOGGED_IN) {
      this.props.fetchCurrentUser()
    }
  }

  componentWillUnmount() {
    clearInterval(this._timer)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      countdown,
      fetchCountdown,
      fetchRecentAnswers
    } = this.props

    if (countdown % 10 === 0) {
      fetchCountdown()
      setTimeout(fetchRecentAnswers, 4000)
    }

    if (isCacheInvalid(this.props, prevProps)) {
      refreshCache(prevProps)
    }
  }

  update() {
    const {
      decrementCountdown
    } = this.props

    decrementCountdown()
  }

  render() {
    const {
      countdown,
      decrementCountdown,
      fetchCountdown,
      fetchCurrentUser,
      fetchFocusedUser,
      fetchStats,
      focusedUser,
      recentAnswers,
      updateUserDetails,
      users,
      ...props
    } = this.props

    return <Nav {...props} />
  }
}

const mapStateToProps = ({
  auth,
  countdown,
  focusedUser,
  isNavOptionsOpen,
  recentAnswers,
  users
}) => ({
  auth,
  countdown,
  focusedUser,
  isNavOptionsOpen,
  recentAnswers,
  users
})

const mapDispatchToProps = {
  authTransition,
  closeNavOptions,
  decrementCountdown,
  openNavOptions,
  fetchCountdown,
  fetchCurrentUser,
  fetchFocusedUser,
  fetchLiveQuestions,
  fetchRecentAnswers,
  fetchStats,
  requestLogout,
  setFocusedUser,
  updateUserDetails
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Container)))
