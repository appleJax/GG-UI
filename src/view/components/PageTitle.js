import React from 'react'
import classNames from 'classnames'
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
  },
  themeDarkBG: {
    background: 'rgba(20,112,169,0.1)'
  },
  darkPurpleBG: {
    background: 'rgba(63,81,181,0.1)'
  },
  themeDarkTitle: {
    color: theme.palette.primary.dark
  },
  darkPurpleTitle: {
    color: '#3F51B5'
  }
})

function PageTitle({
  classes: {
    container,
    title,
    themeDarkBG,
    themeDarkTitle,
    darkPurpleBG,
    darkPurpleTitle
  },
  color,
  children
}) {
  console.log('Color:', color);
  return (
    <div className={classNames(container, {
      [themeDarkBG]:  color === 'themeDark',
      [darkPurpleBG]: color === 'darkPurple'
    })}>
      <Typography
        variant='display1'
        className={classNames(title, {
          [themeDarkTitle]:  color === 'themeDark',
          [darkPurpleTitle]: color === 'darkPurple'
        })}
      >
        { children }
      </Typography>
    </div>
  )
}

export default withStyles(styles)(PageTitle)