import React          from 'react'
import { cardStatus } from 'Utils'
import { withStyles } from 'UI/styles'
import payloadStates  from 'Constants/PayloadStates'
import Typography     from 'UI/Typography'
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
  NOT_FOUND,
  ERROR_FETCHING
} = payloadStates

const Deck = ({
  classes: {
    cardList,
    cardTotals,
    header,
    titleScreen
  },
  auth,
  deck,
  fetchDeck,
  fetchingDeck,
  game
}) => {
  let cardDisplay, deckHeader, pagination

  if (!deck || deck.state === FETCHING)
    cardDisplay = <Spinner />
  else if (deck.state === ERROR_FETCHING)
    cardDisplay = <EmptyMessage error={true} />
  else {
    let userAnswers = { correct: [], incorrect: [] }

    deckHeader = (
      <div className={header}>
        <img
          className={titleScreen}
          height='160'
          src={`/images/deckTitles/${game.slug}.png`}
          alt={`${game.fullTitle} Title Screen`}
        />
        <Typography variant='title' className={cardTotals}>
          { deck.data.totalCards || 0 } / { game.totalCards || 0 }
        </Typography>
      </div>
    )

    if (auth.state === LOGGED_IN) {
      const incorrect = auth.data.allTimeStats.incorrect
      const correct = auth.data.allTimeStats.correct.map(obj => obj.cardId)
      userAnswers = { correct, incorrect }
    }

    const deckPage = deck.data.deckPage || 1
    const cards = deck.data[deckPage] || []
    cardDisplay = cards.map((card, i) =>
      <AnswerCard
        status={cardStatus(card, userAnswers)}
        card={card}
        key={i}
      />
    )

    if (deck.state === NOT_FOUND || !deck.data)
      cardDisplay = <EmptyMessage message='No answers tweeted yet' />


    const totalCards = deck.data.totalCards || 0
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
      { deckHeader }
      { pagination }
      <div className={cardList}>
        { cardDisplay }
      </div>
      { pagination }
    </>
  )
}

export default withStyles(styles)(Deck)
