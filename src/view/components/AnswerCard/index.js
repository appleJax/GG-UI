import React          from 'react'
import classNames     from 'classnames'
import { object }     from 'prop-types'
import { noWrap }     from 'Utils'
import { withStyles } from 'UI/styles'
import styles         from './styles'
import Paper          from 'UI/Paper'
import Typography     from 'UI/Typography'
import { tweetLink }  from 'Utils'

const AnswerCard = ({
  classes: {
    cardAnswer,
    cardHeader,
    cardLink,
    imgCard,
    green,
    red
  },
  card: {
    answerId,
    answers,
    questionText,
    mediaUrl
  },
  status
}) => (
  <a className={cardLink}
     href={tweetLink(answerId)}
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
      <img
        height='160'
        src={mediaUrl.image}
        alt={mediaUrl.altText}
      />
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
