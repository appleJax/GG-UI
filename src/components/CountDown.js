import React, { Component } from 'react'
import { withStyles } from 'UI/styles'
import Typography from 'UI/Typography'
import { TWEET_INTERVAL, formatHMS, getTimeTilNextTweet } from 'Utils'

const styles = (theme) => ({
  container: {
    alignItems: 'center',
    background: 'rgba(29,161,242, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '15px 0 10px'
  },
  countdown: {
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
    if (this.state.seconds <= 0)
      this.setState({seconds: TWEET_INTERVAL})
    else
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
        <Typography className={label} variant='button'>
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
