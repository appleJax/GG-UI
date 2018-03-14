import React, { Component } from 'react'
import ReactDOM             from 'react-dom'
import { connect }          from 'react-redux'
import { withStyles }       from 'UI/styles'
import payloadStates        from 'Constants/PayloadStates'
import asyncActions         from 'Actions/async'
import styles               from './styles'
import CardReviewer         from './component'

const [
  { RESOLVED },
  { fetchCards, setCardView }
] = [ payloadStates, asyncActions ]

const mapStateToProps = ({
  auth,
  focusedUser
}) => ({
  auth,
  focusedUser
})

const mapDispatchToProps = {
  fetchCards,
  setCardView
}

class Container extends Component {
  componentWillMount() {
    const {
      fetchCards,
      focusedUser,
      focusedUser: {
        cardView
      }
    } = this.props

    if (focusedUser[cardView.view].state !== RESOLVED)
      fetchCards(1, cardView.view)
  }

  render() {
    return <CardReviewer {...this.props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Container))
