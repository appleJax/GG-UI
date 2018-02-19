import React from 'react'
import { array, object, string } from 'prop-types'
import payloadStates from 'Constants/PayloadStates'
import { withStyles } from 'UI/styles'
import styles from './styles'
import Paper from 'UI/Paper'
import Subheader from 'UI/List/ListSubheader'
import Typography from 'UI/Typography'

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
    cardAnswer,
    cardList,
    cardHeader,
    container,
    imgCard,
    row,
    subHeader,
    title
  }
}) {

  let cardCount, cardDisplay
  if (!cards || cardsState === FETCHING || cardsState === INITIAL_STATE) {
    cardCount = '???'
    cardDisplay = <h2>Loading...</h2>
  } else if (cardsState === ERROR_FETCHING) {
    cardCount = 'error...';
    cardDisplay = <h2>Error loading...</h2>
  } else if (cardsState === RESOLVED) {
    cardCount = cards.length
    cardDisplay = cards.map(({questionText, mediaUrl, answers}, i) => (
        <Paper className={imgCard} key={i}>
          <Typography className={cardHeader} variant='body1'>
            {questionText}
          </Typography>
          <img
            key={i}
            height='160'
            width='240'
            src={mediaUrl.image}
            alt={mediaUrl.altText}
          />
          <Typography className={cardAnswer} variant='caption'>
            {answers}
          </Typography>
        </Paper>
      ))
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
