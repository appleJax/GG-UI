import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { withStyles }       from 'UI/styles'
import asyncActions         from 'Actions/async'
import Countdown            from './component'
import { TWEET_INTERVAL }   from 'Utils'

const { fetchLiveQuestions, fetchRecentAnswers } = asyncActions

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

  componentWillReceiveProps({
    countdown,
    fetchLiveQuestions
  }) {
    if (countdown === 0)
      setTimeout(fetchLiveQuestions, 4000)
  }

  render() {
    const {
      fetchLiveQuestions,
      ...props
    } = this.props

    return <Countdown {...props} />
  }

}

const mapDispatchToProps = {
  fetchLiveQuestions
}

export default connect(
  ({ countdown }) => ({ countdown }),
  mapDispatchToProps
)(withStyles(styles)(Container))
