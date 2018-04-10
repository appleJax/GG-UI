import React          from 'react'
import classNames     from 'classnames'
import { object }     from 'prop-types'
import Paper          from 'UI/Paper'
import Typography     from 'UI/Typography'
import {
  formatAnswers,
  formatGameTitle,
  pluralize,
  tweetLink
}  from 'Utils'

const AnswerCard = ({
  classes: {
    cardAnswer,
    cardHeader,
    cardLink,
    imgCard,
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
    ? answerMediaUrls
    : questionMediaUrls

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
            imgCard,
            { [green]: status === 'correct'   },
            { [red]:   status === 'incorrect' }
        )}
      >
        <Typography className={cardHeader} variant='body1'>
          {questionText}
        </Typography>
        <Typography className={gameTitle} variant='body1'>
          { formatGameTitle(game) }
        </Typography>
        <div className={imageDiv}>
          { images.map((mediaUrl, i) =>
              <img
                key={i}
                height='200'
                src={mediaUrl.image}
                alt={mediaUrl.altText}
              />
            )
          }
        </div>
        <Typography
          className={cardAnswer}
          variant='caption'
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
