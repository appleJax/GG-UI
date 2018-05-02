import React          from 'react'
import classNames     from 'classnames'
import { object }     from 'prop-types'
import Paper          from 'UI/Paper'
import Typography     from 'UI/Typography'
import {
  formatAnswers,
  formatGameTitle,
  formatQuestionText,
  pluralize,
  tweetLink
}  from 'Utils'

const AnswerCard = ({
  classes: {
    cardAnswer,
    cardHeader,
    cardImage,
    cardImageAlt,
    cardLink,
    imageCard,
    imageContainer,
    imageDiv,
    gameTitle,
    green,
    red
  },
  card: {
    answerId,
    answerMediaUrls,
    answers,
    cardId,
    game,
    questionMediaUrls,
    questionText
  },
  toggleCard,
  showAnswer,
  status
}) => {

  const images = showAnswer
    ? answerMediaUrls || []
    : questionMediaUrls || []

  const cardFooter = showAnswer
    ? (
      <>
      { pluralize(answers, 'Answer') }: { formatAnswers(answers) }
      </>
    )
    : 'Click to Show Answer' 
  
  return (
    <a className={cardLink}
      href={tweetLink(cardId)}
      target='_blank'
    >
      <Paper
        className={classNames(
            imageCard,
            { [green]: status === 'correct'   },
            { [red]:   status === 'incorrect' }
        )}
      >
        <Typography className={cardHeader} variant='subheading'>
          { formatQuestionText(questionText, 2) }
        </Typography>
        <Typography className={gameTitle} variant='body1'>
          { formatGameTitle(game) }
        </Typography>
        <div className={imageDiv}>
          { images.map((mediaUrl, i) =>
            <div key={i} className={imageContainer}>
              <img
                className={classNames(cardImage, cardImageAlt)}
                src={mediaUrl.image}
                alt={mediaUrl.altText}
              />
            </div>
            )
          }
        </div>
        <Typography
          className={cardAnswer}
          variant='body1'
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggleCard()
          }}
        >
          { cardFooter }
        </Typography>
      </Paper>
    </a>
  )
}

AnswerCard.propTypes = {
  classes: object.isRequired,
  card:    object.isRequired
}

export default AnswerCard
