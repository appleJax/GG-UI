import React          from 'react'
import { withStyles } from 'UI/styles'
import payloadStates  from 'Constants/PayloadStates'
import AnswerCard     from 'Components/AnswerCard'
import Spinner        from 'Components/Spinner'
import Typography     from 'UI/Typography'
import { classes }    from 'Styles/common'

const { cardList } = classes
const {
  FETCHING,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

const styles = (theme) => ({
  cardList,
  emptyDeck: {
    background: 'rgba(0,0,0,0.1)',
    borderRadius: '5px',
    marginTop: '20px',
    padding: '15px',
    textShadow: '1px 1px #eee'
  },
  header: {
    alignItems: 'center',
    background: 'rgba(29,161,242,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '25px 0 10px',
  },
  titleScreen: {
    boxShadow: '0 0 15px rgba(0,0,0,0.7)'
  }
})

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
          width='240'
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
