import React, { Component } from 'react'
import Loadable             from 'react-loadable'
import connect              from 'react-redux/es/connect/connect'
import asyncActions         from 'Actions/async'
import syncActions          from 'Actions/sync'
import payloadStates        from 'Constants/PayloadStates'
import Spinner              from 'Components/Spinner'

const Deck = Loadable({
  loader: () => import('Components/Deck'),
  loading: Spinner
})
const DeckTitles = Loadable({
  loader: () => import('Components/DeckTitles'),
  loading: Spinner
})

const { RESOLVED } = payloadStates
const { fetchDeck, fetchDeckTitles } = asyncActions
const { fetchingDeck } = syncActions

const mapStateToProps = ({ auth, deckTitles, decks }) => ({
  auth,
  deckTitles,
  decks
})

const mapDispatchToProps = {
  fetchDeck,
  fetchDeckTitles,
  fetchingDeck
}

class Container extends Component {
  componentDidMount() {
    const {
      fetchDeck,
      fetchDeckTitles,
      match: { params: { game } }
    } = this.props

    fetchDeckTitles()
    const firstPage = 1
    if (game) fetchDeck(firstPage, game)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      decks,
      fetchDeck,
      match: { params: { game } }
    } = this.props

    if (game && !decks[game]) {
      const firstPage = 1
      fetchDeck(firstPage, game)
    }
  }

  render() {
    const {
      decks,
      deckTitles,
      match: { params: { game } },
      ...props
    } = this.props

    const dummyGame = {
      fullTitle: '',
      slug: '',
      totalCards: 0
    }

    if (game) {
      let titleScreen = null
      if (deckTitles.state === RESOLVED)
        titleScreen = deckTitles.data.find(title => title.slug === game)

      return <Deck deck={decks[game]} game={titleScreen || dummyGame} {...props} />
    }

    return <DeckTitles deckTitles={deckTitles} {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
