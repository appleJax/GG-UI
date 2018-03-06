import React, { Component } from 'react'
import { connect }          from 'react-redux'
import asyncActions         from 'Actions/async'
import payloadStates        from 'Constants/PayloadStates'
import Deck                 from 'Components/Deck'
import GameTitles           from 'Components/GameTitles'

const { RESOLVED } = payloadStates
const { fetchDeck, fetchGameTitles } = asyncActions

const mapStateToProps = ({ auth, gameTitles, decks }) => ({
  auth,
  gameTitles,
  decks
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
      fetchDeck,
      gameTitles,
      match: { params: { game } },
      ...props
    } = this.props

    if (game) {
      let titleScreen = null
      if (gameTitles.state === RESOLVED)
        titleScreen = gameTitles.data.find(title => title.slug === game)

      return <Deck deck={decks[game]} game={titleScreen} {...props} />
    }

    return <GameTitles gameTitles={gameTitles} {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
