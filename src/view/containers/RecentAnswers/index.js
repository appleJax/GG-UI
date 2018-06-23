import React, { Component } from 'react'
import connect              from 'react-redux/es/connect/connect'
import { withStyles }       from 'UI/styles'
import payloadStates        from 'Constants/PayloadStates'
import asyncActions         from 'Actions/async'
import styles               from './styles'
import RecentAnswers        from './component'

const [
  { RESOLVED },
  { fetchRecentAnswers }
] = [ payloadStates, asyncActions ]

const mapStateToProps = ({ auth, recentAnswers }) => ({
  auth,
  recentAnswers
})

const mapDispatchToProps = {
  fetchRecentAnswers
}

class Container extends Component {
  componentDidMount() {
    if (this.props.recentAnswers.state !== RESOLVED) {
      this.props.fetchRecentAnswers()
    }
  }

  render() {
    const {
      fetchRecentAnswers,
      ...props
    } = this.props

    return <RecentAnswers {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Container))
