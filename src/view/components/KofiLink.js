import React from 'react'
import classNames from 'classnames'
import { withStyles } from 'UI/styles'

const styles = (theme) => ({
  kofiLink: {
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none'
  },
  btnTheme: {
    color: 'white',
    fontWeight: 'bold'
  },
  ggTheme: {
    color: theme.palette.primary.dark
  },
  kofi: {
    margin: '0 5px 0 -3px',
    height: '13px',
    width: '20px'
  }
})

function KofiLink({ classes, ggTheme }) {
  return (
    <a
      className={classNames(
        classes.kofiLink,
        ggTheme ? classes.ggTheme : classes.btnTheme
      )}
      href='https://ko-fi.com/gamegogakuen'
      target='_blank'
      rel='noopener'
    >
      <img src='https://ko-fi.com/img/cuplogo.svg' className={classes.kofi} />
      Buy Us a Coffee
    </a>
  )
}

export default withStyles(styles)(KofiLink)
