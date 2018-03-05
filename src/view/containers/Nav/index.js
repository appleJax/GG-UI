import React, { Component } from 'react'
import { connect }    from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'UI/styles'
import { navHeight }  from 'Styles/common'
import asyncActions   from 'Actions/async'
import syncActions    from 'Actions/sync'
import payloadStates  from 'Constants/PayloadStates'
import Nav            from './component'

const { LOGGED_IN, RESOLVED } = payloadStates
const [{
  fetchCurrentUser,
  requestLogout,
  updateUserDetails
}, {
  authTransition,
  openNavOptions,
  closeNavOptions
}] = [ asyncActions, syncActions ]


const styles = (theme) => ({
  appBar: {
    padding: '20px',
    width: '100%'
  },
  avatarRoot: {
    boxShadow: '1px 1px 2px rgba(255,255,255,0.5)',
    height: '44px',
    width: '44px'
  },
  followButton: {
    margin: '0 0 -45px 18px'
  },
  link: {
    outline: 'none',
    textDecoration: 'none'
  },
  loggedInIcon: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: '0'
  },
  logo: {
    fontFamily: 'Cabin Sketch',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  navContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'calc((100vw - 1230px) / 2)'
    }
  },
  userHandle: {
    color: 'rgba(0,0,0,0.5)',
    marginTop: '5px',
    textShadow: '1px 1px rgba(255,255,255,0.3)'
  }
})

class Container extends Component {
  componentWillMount() {
    if (this.props.auth.state !== LOGGED_IN)
      this.props.fetchCurrentUser()
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
      fetchCurrentUser,
      ...props
    } = this.props

    return <Nav {...props} />
  }
}

const mapStateToProps = ({ auth, navOptions, recentAnswers }) => ({
  auth,
  navOptions,
  recentAnswers
})

const mapDispatchToProps = {
  authTransition,
  closeNavOptions,
  openNavOptions,
  fetchCurrentUser,
  requestLogout,
  updateUserDetails
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Container)))
