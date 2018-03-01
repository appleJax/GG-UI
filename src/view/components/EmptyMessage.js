import React          from 'react'
import Typography     from 'UI/Typography'
import { withStyles } from 'UI/styles'

const styles = () => ({
  empty: {
    background: 'rgba(0,0,0,0.1)',
    borderRadius: '5px',
    color: 'rgba(0,0,0,0.4)',
    marginTop: '20px',
    padding: '15px',
    textAlign: 'center',
    textShadow: '1px 1px #eee'
  }
})

const EmptyMessage = ({
  classes: { empty },
  message
}) =>
  <Typography
    className={empty}
    variant='headline'
  >
    { message }
  </Typography>

export default withStyles(styles)(EmptyMessage)
