import React from 'react'
import classNames from 'classnames'
import { withStyles } from 'UI/styles'

const styles = (theme) => ({
  patreonLink: {
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
  patreonIcon: {
    marginRight: '5px'
  }
})

function PatreonLink({ classes, ggTheme }) {
  return (
    <a
      className={classNames(
        classes.patreonLink,
        ggTheme ? classes.ggTheme : classes.btnTheme
      )}
      href='https://patreon.com/gamegogakuen'
      target='_blank'
      rel='noopener'
    >
      <svg
        className={classes.patreonIcon}
        width='15px'
        height='14px'
        viewBox='0 0 569 546'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
      >
        <title>Patreon logo</title>
        <g>
          <circle
            fill={ggTheme ? '#F96854' : '#fff'}
            id='Oval'
            cx='362.589996'
            cy='204.589996'
            r='204.589996'
          />
          <rect
            fill='#052D49'
            id='Rectangle'
            x='0'
            y='0'
            width='100'
            height='545.799988'
          />
        </g>
      </svg>
      Become a Patron
    </a>
  )
}

export default withStyles(styles)(PatreonLink)
