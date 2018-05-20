import React from 'react'
import { withStyles } from 'UI/styles'
import ButtonBase from 'UI/ButtonBase'

const styles = (theme) => ({
  footer: {
    background: '#ddd',
    padding: '10px',
    textAlign: 'center'
  },
  kofi: {
    margin: '0 5px -3px',
    height: '13px',
    width: '20px'
  },
  kofiBtn: {
    background: theme.palette.primary.main,
    borderRadius: '3px',
    boxShadow: '1px 1px 1px rgba(0,0,0,0.3)',
    margin: '0 auto',
    padding: '5px',
    '&:hover': {
      background: theme.palette.primary.light
    }
  },
  kofiLink: {
    color: 'white',
    fontWeight: 'bold',
    textDecoration: 'none'
  }
})

function LandingFooter({ classes }) {
  return (
    <footer className={classes.footer}>
      <ButtonBase className={classes.kofiBtn}>
        <a
          className={classes.kofiLink}
          href='//ko-fi.com/gamegogakuen'
          target='_blank'
          rel='noopener'
        >
          <img src='//ko-fi.com/img/cuplogo.svg' className={classes.kofi} />
          Buy Us a Coffee
        </a>
      </ButtonBase>
    </footer>
  )
}

export default withStyles(styles)(LandingFooter)