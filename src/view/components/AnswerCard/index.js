import React          from 'react'
import classNames     from 'classnames'
import { object }     from 'prop-types'
import { noWrap }     from 'Utils'
import { withStyles } from 'UI/styles'
import styles         from './styles'
import Paper          from 'UI/Paper'
import Typography     from 'UI/Typography'
import {
  formatGameTitle,
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
    answers,
    cardId,
    game,
    questionText,
    mediaUrls
  },
  status
}) => (
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
        { mediaUrls.map((mediaUrl, i) =>
            <img
              key={i}
              height='160'
              src={mediaUrl.image}
              alt={mediaUrl.altText}
            />
          )
        }
      </div>
      <Typography className={cardAnswer} variant='caption'>
        { noWrap(answers) }
      </Typography>
    </Paper>
  </a>
)

AnswerCard.propTypes = {
  classes: object.isRequired,
  card:    object.isRequired
}

export default withStyles(styles)(AnswerCard)
