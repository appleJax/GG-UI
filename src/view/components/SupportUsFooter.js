import React from 'react'
import classNames from 'classnames'
import { withStyles } from 'UI/styles'
import ButtonBase from 'UI/ButtonBase'
import KofiLink from 'Components/KofiLink'
import PatreonLink from 'Components/PatreonLink'

const styles = (theme) => ({
  footer: {
    background: '#ddd',
    marginTop: '15px',
    padding: '10px',
    textAlign: 'center'
  },
  btn: {
    borderRadius: '3px',
    boxShadow: '1px 1px 1px rgba(0,0,0,0.3)',
    height: '40px',
    margin: '0 10px',
    padding: '5px 15px',
  },
  kofiBtn: {
    background: theme.palette.primary.main,
    paddingLeft: '18px',
    '&:hover': {
      background: theme.palette.primary.light
    }
  },
  patreonBtn: {
    background: '#F96854',
    '&:hover': {
      background: '#F76'
    }
  }
})

function SupportUsFooter({ classes }) {
  return (
    <footer className={classes.footer}>
      <ButtonBase className={classNames(classes.btn, classes.patreonBtn)}>
        <PatreonLink />
      </ButtonBase>
      <ButtonBase className={classNames(classes.btn, classes.kofiBtn)}>
        <KofiLink />
      </ButtonBase>
    </footer>
  )
}

export default withStyles(styles)(SupportUsFooter)