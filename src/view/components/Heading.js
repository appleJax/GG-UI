import React          from 'react'
import { withStyles } from 'UI/styles'
import Typography     from 'UI/Typography'

const styles = (theme) => ({
  heading: {
    margin: '30px auto 15px',
    maxWidth: '100vw',
    padding: '10px 50px',
    textAlign: 'center',
    textShadow: '0 3px 15px rgba(0,0,0,0.3)',
    [theme.breakpoints.down('sm')]: {
      margin: '30px -15px 15px',
      width: 'calc(100% + 30px)'
    }
  }
})

function Heading({
  classes: {
    heading
  },
  color,
  children
}) {
  const colors = {
    liveQuestions: '51, 82, 225',
    recentAnswers: '90, 125, 139'
  }
  const value = colors[color] || '20, 112, 169'
  const colorStyle = {
    background: `rgba(${value},0.1)`,
    borderLeft: `5px solid rgb(${value})`,
    color: `rgb(${value})`
  }

  return (
    <Typography className={heading} style={colorStyle} variant='headline'>
      { children }
    </Typography>
  )
}

export default withStyles(styles)(Heading)
