import React          from 'react'
import { withStyles } from 'UI/styles'
import payloadStates  from 'Constants/PayloadStates'
import AnswerCard     from 'Components/AnswerCard'
import EmptyMessage   from 'Components/EmptyMessage'
import Spinner        from 'Components/Spinner'
import styles         from './styles'

const {
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
  deck,
  game
}) => {
  let cardDisplay
  if (!deck || deck.state === FETCHING)
    cardDisplay = <Spinner />
  else if (deck.state === ERROR_FETCHING)
    cardDisplay = <h2>Error Loading...</h2>
  else if (deck.data.length === 0)
    cardDisplay = <EmptyMessage message='No Answers Tweeted Yet' />
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
