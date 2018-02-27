import React          from 'react'
import { withStyles } from 'UI/styles'
import classNames     from 'classnames'

const styles = (theme) => ({
  spinner: {
    animation: 'spin 2s linear infinite',
    border: '8px solid rgba(0,0,0,0.1)',
    borderRadius: '50%',
    height: '44px',
    margin: '10px auto',
    width: '44px'
  },
  blue: {
    borderBottom: `8px solid rgba(29,161,242,0.7)`,
    borderTop: `8px solid rgba(29,161,242,0.7)`
  },
  purple: {
    borderBottom: `8px solid rgba(121,75,196,0.7)`,
    borderTop: `8px solid rgba(121,75,196,0.7)`
  },
  '@keyframes spin': {
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' }
  }
})

const Spinner = ({ classes: { spinner, blue, purple }, color }) =>
  <div className={classNames(spinner, blue, {[purple]: color})} />


export default withStyles(styles)(Spinner)
