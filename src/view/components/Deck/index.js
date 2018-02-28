import React          from 'react'
import { withStyles } from 'UI/styles'
import payloadStates  from 'Constants/PayloadStates'
import AnswerCard     from 'Components/AnswerCard'
import Spinner        from 'Components/Spinner'
import Typography     from 'UI/Typography'
import styles         from './styles'

const {
  FETCHING,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

const Deck = ({
  classes: {
    cardList,
    emptyDeck,
    header,
    titleScreen
  },
  deck,
  game
}) => {
  let cardDisplay
  if (!deck || deck.state === FETCHING)
    cardDisplay = <Spinner />
  else if (deck.state === ERROR_FETCHING)
    cardDisplay = <h2>Error Loading...</h2>
  else if (deck.data.length === 0)
    cardDisplay = (
      <Typography
        className={emptyDeck}
        variant='display1'
      >
        No Cards Tweeted Yet
      </Typography>)
  else
    cardDisplay = deck.data.map((card, i) =>
      <AnswerCard key={i} card={card} />
    )

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
