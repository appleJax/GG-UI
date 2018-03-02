import React          from 'react'
import { object }     from 'prop-types'
import { cardStatus } from 'Utils'
import payloadStates  from 'Constants/PayloadStates'
import Paper          from 'UI/Paper'
import Typography     from 'UI/Typography'
import AnswerCard     from 'Components/AnswerCard'
import EmptyMessage   from 'Components/EmptyMessage'
import Spinner        from 'Components/Spinner'

const {
  LOGGED_IN,
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
  auth,
  recentAnswers
}) {
  let cardDisplay
  if (recentAnswers.state === ERROR_FETCHING)
    cardDisplay = <h1>Error loading...</h1>

  if (recentAnswers.state === NOT_FOUND)
    cardDisplay = <EmptyMessage message='No Recent Answers. Check Back Soon!' />

  if (recentAnswers.state === FETCHING)
    cardDisplay = <Spinner />

  if (recentAnswers.data.length > 0) {
    let userAnswers = { correct: [], incorrect: [] }
    if (auth.state === LOGGED_IN) {
      const incorrect = auth.data.allTimeStats.incorrect
      const correct = auth.data.allTimeStats.correct.map(obj => obj.cardId)
      userAnswers = { correct, incorrect }
    }

    cardDisplay = recentAnswers.data.map(
      (card, i) =>
        <AnswerCard
          status={cardStatus(card, userAnswers)}
          card={card}
          key={i}
        />
    )
  }

  return (
    <div className={container}>
      <Typography className={title} variant='display1'>
        Recent Answers
      </Typography>

      <div className={cardList}>
        { cardDisplay }
      </div>
    </div>
  )
}

RecentAnswers.propTypes = {
  classes:       object.isRequired,
  recentAnswers: object.isRequired
}

export default RecentAnswers
