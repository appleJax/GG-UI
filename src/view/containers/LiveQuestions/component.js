import React         from 'react'
import { object }    from 'prop-types'
import payloadStates from 'Constants/PayloadStates'
import Paper         from 'UI/Paper'
import Typography    from 'UI/Typography'
import EmptyMessage  from 'Components/EmptyMessage'
import Spinner       from 'Components/Spinner'
import {
  calculateTimeRemaining,
  formatGameTitle,
  formatQuestionText,
  questionLink
} from 'Utils'

const {
  INITIAL_STATE,
  FETCHING,
  NOT_FOUND,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

function LiveQuestions({
  classes: {
    cardList,
    cardLink,
    captionText,
    container,
    imageDiv,
    liveTitle,
    timeLeftText,
    gameTitle,
    questionCard
  },
  liveQuestions
}) {
  let cardDisplay
  if (
    liveQuestions.state === INITIAL_STATE ||
    liveQuestions.state === FETCHING &&
    liveQuestions.data.length === 0
  ) cardDisplay = <Spinner color='live' />
  else if (liveQuestions.state === ERROR_FETCHING)
    cardDisplay = <h1>Error loading...</h1>
  else if (liveQuestions.state === NOT_FOUND)
    cardDisplay = <EmptyMessage message='No live questions. Check back soon!' />
  else
    cardDisplay = liveQuestions.data.map((question, i) => {
      const {
        game,
        mediaUrls,
        questionId,
        questionPostedAt,
        questionText
      } = question

      const timeRemaining = calculateTimeRemaining(questionPostedAt)
      const text = formatQuestionText(questionText)
      return (
        <a key={i}
           className={cardLink}
           href={questionLink(questionId)}
           target='_blank'
        >
          <Paper classes={{root: questionCard}}>
            <Typography className={captionText} color='secondary' variant='body2'>
              {text}
            </Typography>
            <Typography className={gameTitle} variant='body1'>
              { formatGameTitle(game) }
            </Typography>
            <div className={imageDiv}>
            { mediaUrls.map((mediaUrl, innerIndex) =>
                <img
                  key={`${i}-${innerIndex}`}
                  height='160'
                  width='240'
                  src={mediaUrl.image}
                  alt={mediaUrl.altText}
                />
            )}
            </div>
            <Typography className={timeLeftText} variant='caption'>
              Time Remaining: {timeRemaining}
            </Typography>
          </Paper>
        </a>
      )
    })

  return (
    <div className={container}>
      <Typography className={liveTitle} variant='display1'>
        Live Questions
      </Typography>

      <div className={cardList}>
        { cardDisplay }
      </div>
    </div>
  )
}

LiveQuestions.propTypes = {
  classes:       object.isRequired,
  liveQuestions: object.isRequired
}

export default LiveQuestions
