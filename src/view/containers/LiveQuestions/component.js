import React         from 'react'
import classNames    from 'classnames'
import { object }    from 'prop-types'
import payloadStates from 'Constants/PayloadStates'
import CheckCircle   from 'Icons/CheckCircle'
import Button        from 'UI/Button'
import Paper         from 'UI/Paper'
import Typography    from 'UI/Typography'
import EmptyMessage  from 'Components/EmptyMessage'
import Heading       from 'Components/Heading'
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
  FETCHING,
  NOT_FOUND,
  ERROR_FETCHING
} = payloadStates

function LiveQuestions({
  classes: {
    answered,
    answeredIcon,
    cardImage,
    cardImageAlt,
    cardList,
    cardLink,
    captionText,
    container,
    imageContainer,
    imageDiv,
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

  if (liveQuestions.state === FETCHING) {
    cardDisplay = <Spinner color='live' />
  } else if (liveQuestions.state === ERROR_FETCHING) {
    cardDisplay = <EmptyMessage error />
  } else if (liveQuestions.state === NOT_FOUND) {
    cardDisplay = <EmptyMessage message='No live questions. Check back soon!' />
  } else {
    cardDisplay = liveCards.map((question, i) => {
      const {
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
      )  { userAnswered = true }

      const promptToAnswer = (
        <Button
          className={submitAnswerBtn}
          href={dmLink(cardId)}
          rel='noopener'
          size='small'
          target='_blank'
          variant='flat'
        >
          Submit Answer
        </Button>
      )

      const didAnswer = (
        <Button
          className={submitAnswerBtn}
          size='small'
          variant='flat'
          disabled
        >
          <CheckCircle className={answeredIcon} />
          Answered
        </Button>
      )

      const answerButton = userAnswered
        ? didAnswer
        : promptToAnswer

      const timeRemaining = calculateTimeRemaining(questionPostedAt)

      return (
        <Paper
          key={i}
          className={userAnswered ? answered : ''}
          classes={{root: questionCard}}
        >
          <a
            className={cardLink}
            href={questionLink(questionId)}
            rel='noopener'
            target='_blank'
          />
          <Typography className={captionText} color='secondary' variant='subheading'>
            { formatQuestionText(questionText) }
          </Typography>
          <Typography className={gameTitle} variant='body1'>
            { formatGameTitle(game) }
          </Typography>
          <div className={imageDiv}>
            { mediaUrls.map((mediaUrl, innerIndex) =>
              <div key={`${i}-${innerIndex}`} className={imageContainer}>
                <img
                  className={classNames(cardImage, cardImageAlt)}
                  src={mediaUrl.image}
                  alt={mediaUrl.altText}
                />
              </div>
            )}
          </div>
          { answerButton }
          <Typography className={timeLeftText} variant='body1'>
            Time Remaining: {timeRemaining}
          </Typography>
        </Paper>
      )
    })
  }

  let allAnswered
  if (
    liveCards.length > 0 &&
    auth.state === LOGGED_IN &&
    liveCards.every(userHasAnswered(auth.data))
  ) { allAnswered = <CheckCircle /> }

  return (
    <div className={container}>
      <Heading color='liveQuestions'>
        { allAnswered } Live Questions
      </Heading>

      <div className={cardList}>
        { cardDisplay }
      </div>
    </div>
  )
}

LiveQuestions.propTypes = {
  auth:          object.isRequired,
  classes:       object.isRequired,
  liveQuestions: object.isRequired
}

export default LiveQuestions
