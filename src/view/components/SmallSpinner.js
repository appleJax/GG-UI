import React from 'react'
import { withStyles } from 'UI/styles'

const styles = (theme) => ({
  spinner: {
    animation: 'spin 0.3s linear infinite',
    border: '3px solid rgba(0,0,0,0.1)',
    borderBottom: '2px solid rgba(0,0,0,0.7)',
    borderRadius: '50%',
    height: '18px',
    width: '18px'
  },
  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to:   { transform: 'rotate(360deg)' }
  }
})

export default withStyles(styles)(({ classes, style }) =>
  <div style={style} className={classes.spinner} />
)
