import React              from 'react'
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
import Drawer             from 'UI/Drawer'
import IconButton         from 'UI/IconButton'
import List               from 'UI/List'
import Menu               from 'UI/Menu'
import MenuItem           from 'UI/MenuItem'
import Toolbar            from 'UI/Toolbar'
import Typography         from 'UI/Typography'
import KofiLink           from 'Components/KofiLink'
import PatreonLink        from 'Components/PatreonLink'
import { bool, func, object } from 'prop-types'
import {
  alreadyFollowing
} from 'Utils'

const { API_URL, FOLLOW_URL } = process.env

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
      menuItem,
      noHoverEffect,
      navContainer,
      navMenu,
      profileIcon,
      signInIcon,
      spacer,
      supportLink,
      userHandle
    },
    auth,
    authTransition,
    dispatch,
    history,
    location,
    requestLogout,
    isNavOptionsOpen,
    openNavOptions,
    closeNavOptions,
    requestLogin,
    setFocusedUser
  } = props

  const go = (path) => {
    closeNavOptions()
    history.push(path)
  }
  const user = auth.data

  const menuItems = (
    <List className={navMenu}>
      { auth.state === LOGGED_IN
        ? (
          <MenuItem
            disabled={location.pathname === `/stats/${user.handle}`}
            onClick={() => {
              setFocusedUser(auth.data)
              go(`/stats/${user.handle}`)
            }}
          >
            <AccountCircle className={profileIcon} /> My Profile
          </MenuItem>
        )
        : (
          <a href={`${API_URL}/login`}
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
      <MenuItem
        disabled={location.pathname === '/'}
        onClick={() => go('/')}
      >
        Live Questions
      </MenuItem>
      <MenuItem
        disabled={location.pathname === '/stats'}
        onClick={() => go('/stats')}
      >
        Leaderboard
      </MenuItem>
      <MenuItem
        disabled={location.pathname === '/decks'}
        onClick={() => go('/decks')}
      >
        Flashcard Decks
      </MenuItem>
      <MenuItem
        disabled={location.pathname === '/how-to-play'}
        onClick={() => go('/how-to-play')}
      >
        How to Play
      </MenuItem>
      { auth.state === LOGGED_IN &&
        <>
        <Divider className={divider} />
        <MenuItem onClick={() => requestLogout(history)}>
          Sign Out
        </MenuItem>
        </>
      }
      <div className={spacer} />
      <MenuItem className={supportLink}>
        <PatreonLink ggTheme='true' />
      </MenuItem>
      <MenuItem className={supportLink}>
        <KofiLink ggTheme='true' />
      </MenuItem>
    </List>
  )


  let menuIcon = <MenuIcon />
  if (auth.state === LOGGED_IN) {
    menuIcon = (
      <div className={loggedInIcon}>
        <Avatar
          alt={user.name}
          classes={{root: avatarRoot}}
          src={user.avatar}
        />
        <Typography
        className={userHandle} variant='caption'>
          {`@${user.handle}`}
        </Typography>
      </div>
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
            { !alreadyFollowing(auth) &&
              <Button
                className={followButton}
                href={FOLLOW_URL}
                rel='noopener'
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
            }
          </div>
          <IconButton
            classes={{ root: auth.state === LOGGED_IN && noHoverEffect }}
            aria-owns={isNavOptionsOpen ? 'menu-appbar' : null}
            aria-haspopup='true'
            color='inherit'
            disableRipple={auth.state === LOGGED_IN}
            onClick={openNavOptions}
          >
            {  menuIcon }
          </IconButton>
          <Drawer
            id='menu-appbar'
            anchor='right'
            open={isNavOptionsOpen}
            onClose={closeNavOptions}
          >
            { menuItems }
          </Drawer>
        </div>
      </AppBar>
    </div>
  )
}

Nav.propTypes = {
  classes:          object.isRequired,
  history:          object.isRequired,
  location:         object.isRequired,
  isNavOptionsOpen: bool.isRequired,
  openNavOptions:   func.isRequired,
  closeNavOptions:  func.isRequired
}

export default Nav
