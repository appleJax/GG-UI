import React          from 'react'
import { withStyles } from 'UI/styles'
import Spinner        from 'Components/Spinner'

const styles = {
  backdrop: {
    alignItems: 'center',
    background: 'rgba(255,255,255,0.5)',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    left: '0',
    top: '0',
    height: '100vh',
    width: '100vw',
    zIndex: '1'
  }
}

const Loading = ({classes: { backdrop }}) =>
  <div className={backdrop}>
    <Spinner />
  </div>

export default withStyles(styles)(Loading)
