import React          from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'UI/styles'
import Paper          from 'UI/Paper'
import Typography     from 'UI/Typography'

const styles = (theme) => ({
  cardLink: {
    background: '#3F51B5',
    margin: '10px',
    textAlign: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  label: {
    color: 'white',
    padding: '5px',
    textShadow: '1px 1px 2px #1F3195'
  }
})

const TitleCard = ({
  classes: {
    cardLink,
    label
  },
  game,
  history
}) =>
  <Paper
    className={cardLink}
    onClick={() => history.push(`decks/${game.slug}`)}
  >
    <Typography className={label} variant='subheading'>
      { game.fullTitle }
    </Typography>
    <img
      height='160'
      src={`/images/gameTitles/${game.slug}.png`}
      alt={`${game.fullTitle} Title Screen`}
    />
  </Paper>

export default withRouter(
  withStyles(styles)(TitleCard)
)
