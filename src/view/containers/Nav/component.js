import React              from 'react'
import { func, object }   from 'prop-types'
import payloadStates      from 'Constants/PayloadStates'
import classNames         from 'classnames'
import Loading            from 'Components/Loading'
import MenuIcon           from 'Icons/Menu'
import AppBar             from 'UI/AppBar'
import Avatar             from 'UI/Avatar'
import Button             from 'UI/Button'
import IconButton         from 'UI/IconButton'
import Menu, { MenuItem } from 'UI/Menu'
import Toolbar            from 'UI/Toolbar'
import Typography         from 'UI/Typography'

const { FETCHING, LOGGED_IN } = payloadStates

function Nav(props) {
  const {
    classes: {
      appBar,
      avatarRoot,
      followButton,
      loggedInIcon,
      logo,
      link,
      navContainer,
      userHandle
    },
    auth,
    authTransition,
    dispatch,
    history,
    location,
    requestLogout,
    navOptions,
    openNavOptions,
    closeNavOptions,
    requestLogin
  } = props

  const open = Boolean(navOptions)
  const options = []
  const go = (path) => {
    closeNavOptions()
    history.push(path)
  }

  let menuIcon
  if (auth.state === LOGGED_IN) {
    const user = auth.data
    menuIcon = (
      <div className={loggedInIcon}>
        <Avatar
          alt={user.name}
          classes={{root: avatarRoot}}
          src={user.avatar}
        />
        <Typography className={userHandle} variant='caption'>
          {`@${user.handle}`}
        </Typography>
      </div>
    )

    options.push(
      <MenuItem key={0} onClick={() => requestLogout(history)}>
        Sign Out
      </MenuItem>
      )
  } else {
    menuIcon = <MenuIcon />

    options.push(
      <a href='/login'
         className={link}
         key={1}
      >
        <MenuItem
          onClick={() => {
            closeNavOptions()
            authTransition()
          }}
        >
            Sign In
        </MenuItem>
      </a>
      )
  }

  if (location.pathname !== '/')
    options.push(
      <MenuItem
        key={2}
        onClick={() => go('/')}
      >
        Live Questions
      </MenuItem>
    )

  if (location.pathname !== '/stats')
    options.push(
      <MenuItem
        key={3}
        onClick={() => go('/stats')}
      >
        LeaderBoard
      </MenuItem>
    )

  if (location.pathname !== '/decks')
    options.push(
      <MenuItem
        key={4}
        onClick={() => go('/decks')}
      >
        All Decks
      </MenuItem>
    )

  return (
    <div>
      { auth.state === FETCHING && <Loading /> }
      <AppBar
        className={appBar}
        color='primary'
        position='static'
      >
        <div className={navContainer}>
          <div>
            <Typography
              className={logo}
              color='inherit'
              onClick={() => history.push('/')}
              variant='title'
            >
              GameGogakuen
            </Typography>
            <Button
              className={followButton}
              href='https://twitter.com/intent/follow?screen_name=devtest222'
              target='_blank'
              variant='fab'
            >
              <img
                alt='Follow @GameGogakuen'
                height='50'
                width='50'
                src='/images/twitter/Twitter_Logo_Blue.svg'
              />
            </Button>
          </div>
          <IconButton
            aria-owns={open ? 'menu-appbar' : null}
            aria-haspopup='true'
            color='inherit'
            onClick={(e) => openNavOptions(e.currentTarget)}
          >
            {  menuIcon }
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={navOptions}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={closeNavOptions}
          >
            {options}
          </Menu>
        </div>
      </AppBar>
    </div>
  )
}

Nav.propTypes = {
  classes:         object.isRequired,
  history:         object.isRequired,
  location:        object.isRequired,
  navOptions:      object,
  openNavOptions:  func.isRequired,
  closeNavOptions: func.isRequired
}

export default Nav
