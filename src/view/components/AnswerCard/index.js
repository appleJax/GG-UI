import React          from 'react'
import { object }     from 'prop-types'
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
    imgCard
  },
  card: {
    answerId,
    answers,
    questionText,
    mediaUrl
  }
}) => (
  <a className={cardLink}
     href={tweetLink(answerId)}
     target='_blank'
  >
    <Paper className={imgCard}>
      <Typography className={cardHeader} variant='body1'>
        {questionText}
      </Typography>
      <img
        height='160'
        width='240'
        src={mediaUrl.image}
        alt={mediaUrl.altText}
      />
      <Typography className={cardAnswer} variant='caption'>
        {answers}
      </Typography>
    </Paper>
  </a>
)

AnswerCard.propTypes = {
  classes: object.isRequired,
  card:    object.isRequired
}

export default withStyles(styles)(AnswerCard)
