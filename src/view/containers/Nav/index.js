import React, { Component } from 'react'
import { connect }    from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'UI/styles'
import { navHeight }  from 'Styles/common'
import asyncActions   from 'Actions/async'
import syncActions    from 'Actions/sync'
import payloadStates  from 'Constants/PayloadStates'
import Nav            from './component'

const { LOGGED_IN } = payloadStates
const { fetchCurrentUser, requestLogout } = asyncActions
const { authTransition, openNavOptions, closeNavOptions } = syncActions


const styles = (theme) => ({
  appBar: {
    padding: '20px',
    width: '100%'
  },
  avatarRoot: {
    boxShadow: '2px 2px 3px rgba(0,0,0,0.5)',
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

  render() {
    const {
      fetchCurrentUser,
      ...props
    } = this.props

    return <Nav {...props} />
  }
}

const mapStateToProps = ({ auth, navOptions }) => ({
  auth,
  navOptions
})

const mapDispatchToProps = {
  authTransition,
  closeNavOptions,
  openNavOptions,
  fetchCurrentUser,
  requestLogout
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Container)))
