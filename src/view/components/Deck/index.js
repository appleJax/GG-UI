import React          from 'react'
import { cardStatus } from 'Utils'
import { withStyles } from 'UI/styles'
import payloadStates  from 'Constants/PayloadStates'
import AnswerCard     from 'Components/AnswerCard'
import EmptyMessage   from 'Components/EmptyMessage'
import Spinner        from 'Components/Spinner'
import styles         from './styles'

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
  game
}) => {
  let cardDisplay
  if (!deck || deck.state === FETCHING)
    cardDisplay = <Spinner />
  else if (deck.state === ERROR_FETCHING)
    cardDisplay = <h2>Error Loading...</h2>
  else if (!deck.data || deck.data.length === 0)
    cardDisplay = <EmptyMessage message='No answers tweeted yet' />
  else {
    let userAnswers = { correct: [], incorrect: [] }
    if (auth.state === LOGGED_IN) {
      const incorrect = auth.data.allTimeStats.incorrect
      const correct = auth.data.allTimeStats.correct.map(obj => obj.cardId)
      userAnswers = { correct, incorrect }
    }
    cardDisplay = deck.data.map((card, i) =>
      <AnswerCard
        status={cardStatus(card, userAnswers)}
        card={card}
        key={i}
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
          src={`/images/gameTitles/${game.slug}.png`}
          alt={`${game.fullTitle} Title Screen`}
        />
      }
      </div>
      <div className={cardList}>
        { cardDisplay }
      </div>
    </>
  )
}

export default withStyles(styles)(Deck)
