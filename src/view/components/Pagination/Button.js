import React            from 'react'
import { bool, object } from 'prop-types'
import classNames       from 'classnames'
import { withStyles }   from 'UI/styles'
import Typography       from 'UI/Typography'


const styles = (theme) => ({
  activeClass: {
    background: 'rgb(215,235,255)',
    color: theme.palette.primary.dark,
    '&:hover': {
      cursor: 'default'
    }
  },
  button: {
    alignItems: 'center',
    display: 'flex',
    borderRadius: '2px',
    font: 'bold 1.3em Roboto, sans-serif',
    justifyContent: 'center',
    height: '44px',
    width: '44px',
  },
  clickable: {
    background: '#fff',
    color: theme.palette.primary.main,
    '&:hover': {
      background: theme.palette.primary.main,
      color: '#fff',
      cursor: 'pointer'
    }
  },
  content: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  disabledClass: {
    background: '#eee',
    color: '#888',
    '&:hover': {
      cursor: 'not-allowed'
    }
  },
})

function Button({
  classes: {
    activeClass,
    button,
    clickable,
    content,
    disabledClass
  },
  children,
  active,
  disabled,
  onClick
}) {

  return (
    <div className={classNames(
      button,
      { [activeClass]: active,
        [disabledClass]: disabled,
        [clickable]: !active && !disabled
      }
      )}
      onClick={onClick}
    >
      { children }
    </div>
  )
}

Button.propTypes = {
  active:   bool,
  classes:  object.isRequired,
  disabled: bool
}

export default withStyles(styles)(Button)
