import React from 'react'
import { object } from 'prop-types'
import payloadStates from 'Constants/PayloadStates'
import Paper from 'UI/Paper'
import Typography from 'UI/Typography'
import { calculateTimeRemaining, formatQuestionText } from 'Utils'

const {
  INITIAL_STATE,
  FETCHING,
  NOT_FOUND,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

function LiveQuestions({
  classes: {
    cardLink,
    captionText,
    container,
    imageDiv,
    liveTitle,
    timeLeftText,
    questionCard
  },
  liveQuestions
}) {
  if (
    liveQuestions.state === INITIAL_STATE ||
    liveQuestions.state === FETCHING
  ) return <h1>Loading...</h1>

  if (liveQuestions.state === ERROR_FETCHING)
    return <h1>Error loading...</h1>

  if (liveQuestions.state === NOT_FOUND)
    return <h1>No Live Questions</h1>

  return (
    <div className={container}>
      <Typography className={liveTitle} variant='display1'>
        Live Questions
      </Typography>

      { liveQuestions.data.map((question, index) => {
          const { questionId, questionText, questionPostedAt, mediaUrls } = question
          const timeRemaining = calculateTimeRemaining(questionPostedAt)
          const text = formatQuestionText(questionText)
          return (
            <a key={index}
               className={cardLink}
               href={`https://twitter.com/devtest222/status/${questionId}?ref_src=twcamp%5Eshare%7Ctwsrc%5Em5%7Ctwgr%5Eemail%7Ctwcon%5E7046%7Ctwterm%5E1`}
               target='_blank'
            >
              <Paper key={index} classes={{root: questionCard}}>
                <Typography className={captionText} color='secondary' variant='body2'>
                  {text}
                </Typography>
                <div className={imageDiv}>
                { mediaUrls.map((mediaUrl, innerIndex) =>
                    <img
                      key={`${index}-${innerIndex}`}
                      height='160'
                      width='240'
                      src={mediaUrl.image}
                      alt={mediaUrl.altText}
                    />
                )}
                </div>
                <Typography className={timeLeftText} color='secondary' variant='caption'>
                  Time Remaining: {timeRemaining}
                </Typography>
              </Paper>
            </a>
          )
      })}
    </div>
  )
}

LiveQuestions.propTypes = {
  classes:       object.isRequired,
  liveQuestions: object.isRequired
}

export default LiveQuestions
