import React          from 'react'
import { cardStatus } from 'Utils'
import { withStyles } from 'UI/styles'
import payloadStates  from 'Constants/PayloadStates'
import AnswerCard     from 'Components/AnswerCard'
import EmptyMessage   from 'Components/EmptyMessage'
import Pagination     from 'Components/Pagination'
import Spinner        from 'Components/Spinner'
import styles         from './styles'
import { CARDS_PER_PAGE } from 'Utils'

const {
  LOGGED_IN,
  FETCHING,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

const Deck = ({
  classes: {
    cardList,
    header,
    titleScreen
  },
  auth,
  deck,
  fetchDeck,
  fetchingDeck,
  game
}) => {
  let cardDisplay, pagination
  if (!deck || deck.state === FETCHING)
    cardDisplay = <Spinner />
  else if (deck.state === ERROR_FETCHING)
    cardDisplay = <EmptyMessage error={true} />
  else if (!deck.data || deck.data.length === 0)
    cardDisplay = <EmptyMessage message='No answers tweeted yet' />
  else {
    let userAnswers = { correct: [], incorrect: [] }
    if (auth.state === LOGGED_IN) {
      const incorrect = auth.data.allTimeStats.incorrect
      const correct = auth.data.allTimeStats.correct.map(obj => obj.cardId)
      userAnswers = { correct, incorrect }
    }

    const cards = deck.data[deck.data.deckPage] || []
    cardDisplay = cards.map((card, i) =>
      <AnswerCard
        status={cardStatus(card, userAnswers)}
        card={card}
        key={i}
      />
    )

    const deckPage   = deck.data.deckPage
    const totalCards = deck.data.totalCards
    pagination = (
      <Pagination
        itemsPerPage={CARDS_PER_PAGE}
        fetchData={ (page) => fetchDeck(page, game.slug) }
        numItems={totalCards}
        page={deckPage}
        scrollTop={283}
      />
    )
  }

  return (
    <>
      <div className={header}>
      { game &&
        <img
          className={titleScreen}
          height='160'
          src={`/images/deckTitles/${game.slug}.png`}
          alt={`${game.fullTitle} Title Screen`}
        />
      }
      </div>
      <div className={cardList}>
        { cardDisplay }
      </div>
      { pagination }
    </>
  )
}

export default withStyles(styles)(Deck)
