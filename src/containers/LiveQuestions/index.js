import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { RESOLVED } from 'Constants/PayloadStates'
import { withStyles } from 'UI/styles'
import styles from './styles'
import asyncActions from 'Actions/async'
import LiveQuestions from './component'


const { fetchLiveQuestions } = asyncActions

const mapStateToProps = (state) => ({
  liveQuestions: state.liveQuestions
})

const mapDispatchToProps = {
  fetchLiveQuestions
}

class Container extends Component {
  componentWillMount() {
    if (this.props.liveQuestions.state !== RESOLVED)
      this.props.fetchLiveQuestions()
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
