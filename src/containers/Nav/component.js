import React from 'react'
import { func, object } from 'prop-types'
import classNames from 'classnames'
import AppBar from 'UI/AppBar'
import IconButton from 'UI/IconButton'
import MenuIcon from 'Icons/Menu'
import Menu, { MenuItem } from 'UI/Menu'
import Toolbar from 'UI/Toolbar'
import Typography from 'UI/Typography'

function Nav(props) {
  const {
    classes: {
      appBar,
      logo,
      navContainer
    },
    history,
    location,
    navOptions,
    openNavOptions,
    closeNavOptions
  } = props

  const open = Boolean(navOptions)
  const options = []

  if (location.pathname !== '/')
    options.push(
      <MenuItem
        key={0}
        onClick={() => {
          closeNavOptions()
          history.push('/')
        }}
      >
        Live Questions
      </MenuItem>
    )

  if (location.pathname !== '/stats')
    options.push(
      <MenuItem
        key={1}
        onClick={() => {
          closeNavOptions()
          history.push('/stats')
        }}
      >
        LeaderBoard
      </MenuItem>
    )

  return (
    <div>
      <AppBar
        className={appBar}
        color='primary'
        position='static'
      >
        <div className={navContainer}>
          <Typography
            className={logo}
            color='inherit'
            onClick={() => history.push('/')}
            variant='title'
          >
            GameGogakuen
          </Typography>
          <IconButton
            aria-owns={open ? 'menu-appbar' : null}
            aria-haspopup='true'
            color='inherit'
            onClick={(e) => openNavOptions(e.currentTarget)}
          >
            <MenuIcon />
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
  classes: object.isRequired,
  history: object.isRequired,
  location: object.isRequired,
  navOptions: object,
  openNavOptions: func.isRequired,
  closeNavOptions: func.isRequired
}

export default Nav
