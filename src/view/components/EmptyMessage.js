import React          from 'react'
import Typography     from 'UI/Typography'
import classNames     from 'classnames'
import { withStyles } from 'UI/styles'

const styles = () => ({
  empty: {
    background: 'rgba(0,0,0,0.1)',
    borderRadius: '5px',
    color: 'rgba(0,0,0,0.4)',
    padding: '15px',
    textAlign: 'center',
    textShadow: '1px 1px #eee'
  },
  errorMsg: {
    background: 'rgba(180,0,0,0.1)',
    color: 'rgba(255,0,0,0.8)'
  }
})

const EmptyMessage = ({
  classes: {
    empty,
    errorMsg
  },
  message,
  error
}) =>
  <Typography
    className={classNames(
      empty,
      { [errorMsg]: error }
    )}
    variant='headline'
  >
    { error
      ? 'Error Loading...'
      : message
    }
  </Typography>

export default withStyles(styles)(EmptyMessage)
