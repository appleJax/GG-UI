import React from 'react'
import { object } from 'prop-types'
import classNames from 'classnames'
import { withStyles } from 'UI/styles'
import AppBar from 'UI/AppBar'
import Typography from 'UI/Typography'

const styles = {
  root: {
    width: '100%',
  },
  appBar: {
    padding: '20px',
    width: '100%'
  }
}

function Nav(props) {
  const { appBar, root } = props.classes

  return (
    <div className={root}>
      <AppBar
        position="static"
        color="primary"
        className={appBar}
      >
        <Typography type="title" color="inherit">
          GameGogakuen
        </Typography>
      </AppBar>
    </div>
  )
}

Nav.propTypes = {
  classes: object.isRequired
}

export default withStyles(styles)(Nav)
