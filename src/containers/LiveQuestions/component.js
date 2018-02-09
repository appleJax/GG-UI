import React from 'react'
import { array, object } from 'prop-types'
import Paper from 'UI/Paper'
import Typography from 'UI/Typography'
import { calculateTimeRemaining, formatQuestionText } from 'Utils'


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
  if (liveQuestions.length === 0)
    return <h1>Loading...</h1>

  return (
    <div className={container}>
      <Typography className={liveTitle} variant='display1'>Live Questions</Typography>

      { liveQuestions.map((question, index) => {
          const { questionId, questionText, questionPostedAt, mediaUrls } = question
          const timeRemaining = calculateTimeRemaining(questionPostedAt)
          const text = formatQuestionText(questionText)
          return (
            <a key={index}
               className={cardLink}
               href={`https://twitter.com/statuses/${questionId}`}
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
  classes: object.isRequired,
  liveQuestions: array.isRequired
}

export default LiveQuestions
