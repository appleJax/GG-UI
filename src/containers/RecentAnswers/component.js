import React from 'react'
import { object } from 'prop-types'
import payloadStates from 'Constants/PayloadStates'
import Paper from 'UI/Paper'
import Typography from 'UI/Typography'
import AnswerCard from 'Components/AnswerCard'

const {
  INITIAL_STATE,
  FETCHING,
  NOT_FOUND,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

function RecentAnswers({
  classes: {
    cardList,
    container,
    title
  },
  recentAnswers
}) {

  if (recentAnswers.state === ERROR_FETCHING)
    return <h1>Error loading...</h1>

  if (recentAnswers.state === NOT_FOUND)
    return ''

  return (
    <div className={container}>
      <Typography className={title} variant='display1'>
        Recent Answers
      </Typography>

      <div className={cardList}>
      { recentAnswers.data.map(
          (card, i) =>
            <AnswerCard key={i} card={card} />
        )
      }
      </div>
    </div>
  )
}

RecentAnswers.propTypes = {
  classes:       object.isRequired,
  recentAnswers: object.isRequired
}

export default RecentAnswers
