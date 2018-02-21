import React, { Component } from 'react'
import { withStyles } from 'UI/styles'
import Typography from 'UI/Typography'
import { TWEET_INTERVAL, formatHMS, getTimeTilNextTweet } from 'Utils'


const styles = (theme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  countdown: {
    font: 'Monospace',
  },
  label: {
    margin: '10px',
    textShadow: '0 3px 15px rgba(0,0,0,0.5)'
  }
})


class CountDown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      seconds: getTimeTilNextTweet()
    }
    this.update = this.update.bind(this)
    this._timer = setInterval(this.update, 1000)
  }

  update() {
    const { history } = this.props
    if (this.state.seconds === 0) {
      history.push('/')
      return
    }
    this.setState({seconds: this.state.seconds - 1})
  }

  render() {
    const {
      classes: {
        container,
        countdown,
        label
      }
    } = this.props

    return (
      <div className={container}>
        <Typography className={label} variant='display1'>
          Next Question:
        </Typography>
        <Typography className={countdown} variant='display1'>
          {formatHMS(this.state.seconds)}
        </Typography>
      </div>
    )
  }

}

export default withStyles(styles)(CountDown)
