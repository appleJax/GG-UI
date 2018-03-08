import React, { Component } from 'react'
import { connect }          from 'react-redux'
import asyncActions         from 'Actions/async'
import payloadStates        from 'Constants/PayloadStates'
import Deck                 from 'Components/Deck'
import DeckTitles           from 'Components/DeckTitles'

const { RESOLVED } = payloadStates
const { fetchDeck, fetchDeckTitles } = asyncActions

const mapStateToProps = ({ auth, deckTitles, decks }) => ({
  auth,
  deckTitles,
  decks
})

const mapDispatchToProps = {
  fetchDeck,
  fetchDeckTitles
}

class Container extends Component {
  componentWillMount() {
    const {
      fetchDeck,
      fetchDeckTitles,
      match: { params: { game } }
    } = this.props

    fetchDeckTitles()
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
      fetchDeck,
      deckTitles,
      match: { params: { game } },
      ...props
    } = this.props

    if (game) {
      let titleScreen = null
      if (deckTitles.state === RESOLVED)
        titleScreen = deckTitles.data.find(title => title.slug === game)

      return <Deck deck={decks[game]} game={titleScreen} {...props} />
    }

    return <DeckTitles deckTitles={deckTitles} {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
