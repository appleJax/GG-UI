import React         from 'react'
import { object }    from 'prop-types'
import payloadStates from 'Constants/PayloadStates'
import CheckCircle   from 'Icons/CheckCircle'
import Button        from 'UI/Button'
import Paper         from 'UI/Paper'
import Typography    from 'UI/Typography'
import EmptyMessage  from 'Components/EmptyMessage'
import Spinner       from 'Components/Spinner'
import {
  calculateTimeRemaining,
  dmLink,
  formatGameTitle,
  formatQuestionText,
  questionLink,
  userHasAnswered
} from 'Utils'

const {
  LOGGED_IN,
  INITIAL_STATE,
  FETCHING,
  NOT_FOUND,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

function LiveQuestions({
  classes: {
    answered,
    cardList,
    cardLink,
    captionText,
    container,
    imageDiv,
    liveTitle,
    gameTitle,
    questionCard,
    submitAnswerBtn,
    timeLeftText
  },
  auth,
  liveQuestions
}) {

  const liveCards = liveQuestions.data
  let cardDisplay

  if (liveQuestions.state === FETCHING)
    cardDisplay = <Spinner color='live' />
  else if (liveQuestions.state === ERROR_FETCHING)
    cardDisplay = <EmptyMessage error={true} />
  else if (liveQuestions.state === NOT_FOUND)
    cardDisplay = <EmptyMessage message='No live questions. Check back soon!' />
  else
    cardDisplay = liveCards.map((question, i) => {
      const {
        alreadyAnswered,
        cardId,
        game,
        mediaUrls,
        questionId,
        questionPostedAt,
        questionText
      } = question

      let userAnswered = false
      if (
        auth.state === LOGGED_IN &&
        userHasAnswered(auth.data)(question)
      ) userAnswered = true

      const timeRemaining = calculateTimeRemaining(questionPostedAt)
      return (
          <Paper
            key={i}
            className={ userAnswered ? answered : '' }
            classes={{root: questionCard}}
          >
            <a
              className={cardLink}
              href={questionLink(questionId)}
              target='_blank'
            ></a>
            <Typography className={captionText} color='secondary' variant='body2'>
              { formatQuestionText(questionText) }
            </Typography>
            <Typography className={gameTitle} variant='body1'>
              { formatGameTitle(game) }
            </Typography>
            <div className={imageDiv}>
            { mediaUrls.map((mediaUrl, innerIndex) =>
                <img
                  key={`${i}-${innerIndex}`}
                  height='160'
                  src={mediaUrl.image}
                  alt={mediaUrl.altText}
                />
            )}
            </div>
            { !userAnswered &&
              <Button
                className={submitAnswerBtn}
                href={dmLink(cardId)}
                size='small'
                target='_blank'
                variant='flat'
              >
                Submit Answer
              </Button>
            }
            <Typography className={timeLeftText} variant='caption'>
              Time Remaining: {timeRemaining}
            </Typography>
          </Paper>
      )
    })

  let allAnswered
  if (
    liveCards.length > 0     &&
    auth.state === LOGGED_IN &&
    liveCards.every(userHasAnswered(auth.data))
  ) allAnswered = <CheckCircle />

  return (
    <div className={container}>
      <Typography className={liveTitle} variant='display1'>
        { allAnswered } Live Questions
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
