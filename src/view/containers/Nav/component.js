import React              from 'react'
import { func, object }   from 'prop-types'
import payloadStates      from 'Constants/PayloadStates'
import classNames         from 'classnames'
import Loading            from 'Components/Loading'
import AccountCircle      from 'Icons/AccountCircle'
import MenuIcon           from 'Icons/Menu'
import AppBar             from 'UI/AppBar'
import Avatar             from 'UI/Avatar'
import Button             from 'UI/Button'
import ButtonBase         from 'UI/ButtonBase'
import Divider            from 'UI/Divider'
import IconButton         from 'UI/IconButton'
import Menu, { MenuItem } from 'UI/Menu'
import Toolbar            from 'UI/Toolbar'
import Typography         from 'UI/Typography'

const { API_URL } = process.env

const { FETCHING, LOGGED_IN } = payloadStates

function Nav(props) {
  const {
    classes: {
      appBar,
      avatarRoot,
      divider,
      followButton,
      loggedInIcon,
      logo,
      link,
      navContainer,
      profileIcon,
      signInIcon,
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
    requestLogin,
    setFocusedUser
  } = props

  const open = Boolean(navOptions)
  const go = (path) => {
    closeNavOptions()
    history.push(path)
  }

  const options = []

  if (location.pathname !== '/')
    options.push(
      <MenuItem
        key={1}
        onClick={() => go('/')}
      >
        Live Questions
      </MenuItem>
    )

  if (location.pathname !== '/stats')
    options.push(
      <MenuItem
        key={2}
        onClick={() => go('/stats')}
      >
        Leaderboard
      </MenuItem>
    )

  if (location.pathname !== '/decks')
    options.push(
      <MenuItem
        key={3}
        onClick={() => go('/decks')}
      >
        Flashcard Decks
      </MenuItem>
    )

  let menuIcon
  if (auth.state === LOGGED_IN) {
    const user = auth.data
    menuIcon = (
      <ButtonBase className={loggedInIcon}>
        <Avatar
          alt={user.name}
          classes={{root: avatarRoot}}
          src={user.avatar}
        />
        <Typography
        className={userHandle} variant='caption'>
          {`@${user.handle}`}
        </Typography>
      </ButtonBase>
    )

    options.unshift(
      <MenuItem
        key={4}
        onClick={() => {
          setFocusedUser(auth.data)
          go(`/stats/${user.handle}`)
        }}
      >
        <AccountCircle className={profileIcon} /> My Profile
      </MenuItem>
    )

    options.push(
      <Divider key={5} className={divider} />
    )

    options.push(
      <MenuItem key={6} onClick={() => requestLogout(history)}>
        Sign Out
      </MenuItem>
    )

  } else {
    menuIcon = <MenuIcon />

    options.unshift(
      <a
        key={7}
        href={`${API_URL}/login`}
        className={link}
      >
        <MenuItem
          onClick={() => {
            closeNavOptions()
            authTransition()
          }}
        >
          <img className={signInIcon} src={'/images/twitter/Twitter_Logo_Blue.svg'} />
          Sign In
        </MenuItem>
      </a>
      )
  }

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
            <ButtonBase
              className={logo}
              onClick={() => history.push('/')}
            >
              GameGogakuen
            </ButtonBase>
            <Button
              className={followButton}
              href='https://twitter.com/intent/follow?screen_name=devtest222'
              target='_blank'
              variant='fab'
            >
              <img
                alt='Follow @GameGogakuen'
                height='45'
                width='45'
                src='/images/twitter/Twitter_Logo_Blue.svg'
              />
            </Button>
          </div>
          <IconButton
            aria-owns={open ? 'menu-appbar' : null}
            aria-haspopup='true'
            color='inherit'
            disableRipple={auth.state === LOGGED_IN}
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
