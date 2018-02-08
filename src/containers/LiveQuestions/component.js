import React from 'react'
import { array, object } from 'prop-types'
import Paper from 'UI/Paper'
import Typography from 'UI/Typography'
import { calculateTimeRemaining, formatQuestionText } from 'Utils'


function LiveQuestions({
  classes: {
    captionText,
    container,
    imageDiv,
    liveTitle,
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
          const { questionText, questionPostedAt, mediaUrls } = question
          const timeRemaining = calculateTimeRemaining(questionPostedAt)
          const text = formatQuestionText(questionText)
          return (
            <Paper key={index} classes={{root: questionCard}}>
              <Typography className={captionText} variant='caption'>
                {text}
              </Typography>
              <div className={imageDiv}>
              { mediaUrls.map((mediaUrl, index) =>
                  <img
                    key={index}
                    height='160'
                    width='240'
                    src={mediaUrl.image}
                    alt={mediaUrl.altText}
                  />
              )}
              </div>
              <Typography className={captionText} variant='caption'>
                Time Remaining: {timeRemaining}
              </Typography>
            </Paper>
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
