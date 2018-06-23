import React          from 'react'
import { object }     from 'prop-types'
import { cardStatus } from 'Utils'
import payloadStates  from 'Constants/PayloadStates'
import AnswerCard     from 'Components/AnswerCard'
import EmptyMessage   from 'Components/EmptyMessage'
import Heading        from 'Components/Heading'
import Spinner        from 'Components/Spinner'

const {
  LOGGED_IN,
  FETCHING,
  NOT_FOUND,
  ERROR_FETCHING
} = payloadStates

function RecentAnswers({
  classes: {
    cardList,
    container
  },
  auth,
  recentAnswers
}) {
  let cardDisplay
  if (recentAnswers.state === ERROR_FETCHING) {
    cardDisplay = <EmptyMessage error={true} />
  }

  if (recentAnswers.state === NOT_FOUND) {
    cardDisplay = <EmptyMessage message='No recent answers. Check back soon!' />
  }

  if (recentAnswers.state === FETCHING) {
    cardDisplay = <Spinner />
  }

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
      <Heading color='recentAnswers'>
        Recent Answers
      </Heading>

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
