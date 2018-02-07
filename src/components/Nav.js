import React from 'react'
import { withRouter } from 'react-router-dom'
import { object } from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'UI/styles'
import { navHeight } from 'Styles/variables'
import AppBar from 'UI/AppBar'
import Typography from 'UI/Typography'

const styles = {
  root: {
    height: navHeight,
    width: '100%'
  },
  appBar: {
    padding: '20px',
    width: '100%'
  },
  logo: {
    fontFamily: 'Cabin Sketch',
    '&:hover': {
      cursor: 'pointer'
    }
  }
}

function Nav(props) {
  const {
    classes: {
      appBar,
      logo,
      root
    },
    history
  } = props

  return (
    <div className={root}>
      <AppBar
        position="static"
        color="primary"
        className={appBar}
      >
        <Typography onClick={() => history.push(`/`)} className={logo} variant="title" color="inherit">
          GameGogakuen
        </Typography>
      </AppBar>
    </div>
  )
}

Nav.propTypes = {
  classes: object.isRequired
}

export default withRouter(withStyles(styles)(Nav))
