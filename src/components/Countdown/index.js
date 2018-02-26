import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'UI/styles'
import syncActions from 'Actions/sync'
import Countdown from './component'

const { decrementCountdown, resetCountdown } = syncActions

const styles = (theme) => ({
  container: {
    alignItems: 'center',
    background: 'rgba(29,161,242, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '15px 0 10px'
  },
  timeLeft: {
    color: theme.palette.primary.dark,
    textShadow: '1px 1px rgba(255,255,255,0.6)'
  },
  label: {
    color: theme.palette.primary.dark,
    font: 'small-caps bold 1em',
    margin: '10px',
    opacity: '0.6',
    textShadow: '1px 1px rgba(255,255,255,0.6)'
  }
})


class Container extends Component {

  componentWillMount() {
    this._timer = setInterval(this.update.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this._timer)
  }

  update(props) {
    console.log('Props:', this.props)

    const {
      countdown,
      decrementCountdown,
      resetCountdown
    } = this.props

    if (countdown <= 0)
      resetCountdown()
    else
      decrementCountdown()
  }

  render() { return <Countdown {...this.props} /> }

}

export default connect(
  (state) => ({ countdown: state.countdown }),
  { decrementCountdown, resetCountdown }
)(withStyles(styles)(Container))
