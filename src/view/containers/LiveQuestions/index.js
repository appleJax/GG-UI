import React, { Component }  from 'react'
import { connect }           from 'react-redux'
import { withStyles }        from 'UI/styles'
import payloadStates         from 'Constants/PayloadStates'
import asyncActions          from 'Actions/async'
import styles                from './styles'
import LiveQuestions         from './component'

const [
  { RESOLVED },
  { fetchLiveQuestions }
] = [ payloadStates, asyncActions ]

const mapStateToProps = ({ auth, countdown, liveQuestions }) => ({
  auth,
  countdown,
  liveQuestions
})

const mapDispatchToProps = {
  fetchLiveQuestions
}

class Container extends Component {
  componentDidMount() {
    if (this.props.liveQuestions.state !== RESOLVED)
      this.props.fetchLiveQuestions()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      countdown,
      fetchLiveQuestions
    } = this.props

    if (countdown % 10 === 0) fetchLiveQuestions()
  }

  render() {
    const {
      fetchLiveQuestions,
      ...props
    } = this.props

    return <LiveQuestions {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Container))
