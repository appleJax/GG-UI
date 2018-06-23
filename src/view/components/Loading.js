import React          from 'react'
import { withStyles } from 'UI/styles'

const styles = {
  backdrop: {
    alignItems: 'center',
    animation: 'pulse 2s linear infinite',
    background: 'rgba(255,255,255,0.5)',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    left: '0',
    top: '0',
    height: '100vh',
    width: '100vw',
    zIndex: '1'
  },
  '@keyframes pulse': {
    '0%':   { background: 'rgba(255,255,255,0.5)' },
    '50%':  { background: 'rgba(255,255,255,0.2)' },
    '100%': { background: 'rgba(255,255,255,0.5)' }
  }
}

const Loading = ({classes: { backdrop }}) =>
  <div className={backdrop} />

export default withStyles(styles)(Loading)
