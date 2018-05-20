import React from 'react'
import classNames from 'classnames'
import { withStyles } from 'UI/styles'
import ButtonBase from 'UI/ButtonBase'

const styles = (theme) => ({
  footer: {
    background: '#ddd',
    marginTop: '10px',
    padding: '10px',
    textAlign: 'center'
  },
  kofi: {
    margin: '0 5px',
    height: '13px',
    width: '20px'
  },
  btn: {
    borderRadius: '3px',
    boxShadow: '1px 1px 1px rgba(0,0,0,0.3)',
    margin: '0 10px',
    padding: '5px',
  },
  kofiBtn: {
    background: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.light
    }
  },
  patreonBtn: {
    background: '#F96854',
    '&:hover': {
      background: '#F76'
    }
  },
  patreonIcon: {
    marginRight: '5px'
  },
  btnLink: {
    alignItems: 'center',
    color: 'white',
    display: 'flex',
    fontWeight: 'bold',
    textDecoration: 'none'
  }
})

function LandingFooter({ classes }) {
  return (
    <footer className={classes.footer}>
      <ButtonBase className={classNames(classes.btn, classes.patreonBtn)}>
        <a
          className={classes.btnLink}
          href='//patreon.com/gamegogakuen'
          target='_blank'
          rel='noopener'
        >
          <svg className={classes.patreonIcon} width="15px" height="14px" viewBox="0 0 569 546" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>Patreon logo</title><g><circle fill="#fff" id="Oval" cx="362.589996" cy="204.589996" r="204.589996"></circle><rect fill="#052D49" id="Rectangle" x="0" y="0" width="100" height="545.799988"></rect></g></svg>
          Become a Patron
        </a>
      </ButtonBase>
      <ButtonBase className={classNames(classes.btn, classes.kofiBtn)}>
        <a
          className={classes.btnLink}
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