import React from 'react'
import { withStyles } from 'UI/styles'
import Typography from 'UI/Typography'

const styles = (theme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '15px',
    padding: '20px 0 10px'
  },
  title: {
    textShadow: '1px 1px #fafafa'
  }
})

function PageTitle({
  classes: {
    container,
    title
  },
  color,
  children
}) {
  const colors = { decks: '63, 81, 181' }
  const value = colors[color] || '20, 112, 169'
  const bgStyle = {
    background: `rgba(${value},0.1)`
  }
  const colorStyle = {
    color: `rgb(${value})`
  }
  return (
    <div className={container} style={bgStyle}>
      <Typography
        className={title}
        style={colorStyle}
        variant='display1'
      >
        { children }
      </Typography>
    </div>
  )
}

export default withStyles(styles)(PageTitle)