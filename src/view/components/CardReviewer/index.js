import React                     from 'react'
import { array, object, string } from 'prop-types'
import payloadStates             from 'Constants/PayloadStates'
import styles                    from './styles'
import { withStyles }            from 'UI/styles'
import Paper                     from 'UI/Paper'
import Subheader                 from 'UI/List/ListSubheader'
import Typography                from 'UI/Typography'
import AnswerCard                from 'Components/AnswerCard'
import EmptyMessage              from 'Components/EmptyMessage'
import Spinner                   from 'Components/Spinner'

const {
  INITIAL_STATE,
  FETCHING,
  NOT_FOUND,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

function CardReviewer({
  cards,
  cardsState,
  classes: {
    cardList,
    container,
    row,
    subHeader,
    title
  }
}) {

  let cardCount, cardDisplay
  if (!cards || cardsState === FETCHING || cardsState === INITIAL_STATE) {
    cardCount = '???'
    cardDisplay = <Spinner />
  } else if (cardsState === ERROR_FETCHING) {
    cardCount = 'error...';
    cardDisplay = <h2>Error loading...</h2>
  } else if (cardsState === NOT_FOUND) {
    cardCount = cards.length
    cardDisplay = <EmptyMessage message='Answer Questions to Earn Cards!' />
  } else {
    cardCount = cards.length
    cardDisplay = cards.map((card, i) => <AnswerCard key={i} card={card} />)
  }

  return (
    <div className={container}>
      <Subheader classes={{root: subHeader}} component='div'>
        <Typography className={title} variant='subheading'>
          FlashCards Earned: {cardCount}
        </Typography>
      </Subheader>
      <div className={cardList}>
        { cardDisplay }
      </div>
    </div>
  )
}

CardReviewer.propTypes = {
  cards:      array,
  cardsState: string.isRequired,
  classes:    object.isRequired
}

export default withStyles(styles)(CardReviewer)
