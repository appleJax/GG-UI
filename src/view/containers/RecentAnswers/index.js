import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { withStyles }       from 'UI/styles'
import payloadStates        from 'Constants/PayloadStates'
import asyncActions         from 'Actions/async'
import styles               from './styles'
import RecentAnswers        from './component'

const [
  { LOGGED_IN, RESOLVED },
  { fetchRecentAnswers, updateUserDetails }
] = [ payloadStates, asyncActions ]

const mapStateToProps = ({ auth, recentAnswers }) => ({
  auth,
  recentAnswers
})

const mapDispatchToProps = {
  fetchRecentAnswers,
  updateUserDetails
}

class Container extends Component {
  componentWillMount() {
    if (this.props.recentAnswers.state !== RESOLVED)
      this.props.fetchRecentAnswers()
  }

  componentWillReceiveProps(nextProps) {
    // Purpose of this method is to update the loggedIn user's data
    // in localStorage if there is a NEW recentAnswer
    //
    // *** NEEDS TESTED ***
    //
    // May need to adjust setTimeout to updateUserDetails() if the new stats
    // are not available in time
    const loggedIn = this.props.auth.state === LOGGED_IN
    const hasRecentAnswers = nextProps.recentAnswers.state === RESOLVED

    if (loggedIn && hasRecentAnswers) {
      const { recentAnswers, updateUserDetails } = this.props
      const recentIds = recentAnswers.data
      if (recentIds.length === 0) {
        updateUserDetails()
        return
      }

      const mostRecentId = recentIds[0].cardId
      const nextMostRecentId = nextProps.recentAnswers.data[0].cardId
      if (mostRecentId !== nextMostRecentId)
        updateUserDetails()

    }
  }

  render() {
    const {
      fetchRecentAnswers,
      ...props
    } = this.props

    return <RecentAnswers {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Container))
