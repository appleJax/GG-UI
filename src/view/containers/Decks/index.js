import React, { Component } from 'react'
import { connect }          from 'react-redux'
import payloadStates        from 'Constants/PayloadStates'
import asyncActions         from 'Actions/async'
import Deck                 from 'Components/Deck'
import GameTitles           from 'Components/GameTitles'

const [
  { INITIAL_STATE, FETCHING, RESOLVED, ERROR_FETCHING, NOT_FOUND },
  { fetchDeck, fetchGameTitles }
] = [ payloadStates, asyncActions ]

const mapStateToProps = (state) => ({
  gameTitles: state.gameTitles,
  decks:      state.decks
})

const mapDispatchToProps = {
  fetchDeck,
  fetchGameTitles
}

class Container extends Component {
  componentWillMount() {
    const {
      fetchDeck,
      fetchGameTitles,
      match: { params: { game } }
    } = this.props

    fetchGameTitles()
    if (game) fetchDeck(game)
  }

  componentWillReceiveProps({
    decks,
    fetchDeck,
    match: { params: { game } }
  }) {
    if (game && !decks[game]) {
      fetchDeck(game)
    }
  }

  render() {
    const {
      decks,
      gameTitles,
      fetchDeck,
      match: { params: { game } },
      ...props
    } = this.props

    return (game)
      ? <Deck deck={decks[game]} {...props} />
      : <GameTitles gameTitles={gameTitles} {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
