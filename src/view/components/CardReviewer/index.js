import React, { Component } from 'react'
import ReactDOM             from 'react-dom'
import { connect }          from 'react-redux'
import { withStyles }       from 'UI/styles'
import payloadStates        from 'Constants/PayloadStates'
import asyncActions         from 'Actions/async'
import syncActions          from 'Actions/sync'
import styles               from './styles'
import CardReviewer         from './component'

const [
  { RESOLVED },
  { fetchCards, setCardView },
  { fetchingCards }
] = [ payloadStates, asyncActions, syncActions ]

const mapStateToProps = ({
  auth,
  focusedUser
}) => ({
  auth,
  focusedUser
})

const mapDispatchToProps = {
  fetchCards,
  fetchingCards,
  setCardView
}

class Container extends Component {
  componentDidMount() {
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
