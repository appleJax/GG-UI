import React           from 'react'
import { withRouter }  from 'react-router-dom'
import { withStyles }  from 'UI/styles'
import Paper           from 'UI/Paper'
import Typography      from 'UI/Typography'
import CloudDownload   from 'Icons/CloudDownload'
import { downloadUrl } from 'Utils'

const styles = (theme) => ({
  cardLink: {
    background: '#3F51B5',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
    textAlign: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  downloadIcon: {
    background: 'rgba(255,255,255,0.1)',
    color: 'rgba(0,0,0,0.5)',
    '&:hover': {
      background: 'rgba(255,255,255,0.2)',
      color: 'rgba(0,0,0,0.8)'
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
    downloadIcon,
    label
  },
  game,
  history
}) =>
  <Paper
    className={cardLink}
  >
    <div onClick={() => history.push(`decks/${game.slug}`)}>
      <Typography className={label} variant='subheading'>
        { game.fullTitle }
      </Typography>
      <img
        height='160'
        src={`/images/deckTitles/${game.slug}.png`}
        alt={`${game.fullTitle} Title Screen`}
      />
    </div>
    <a className={downloadIcon} href={downloadUrl(game.fullTitle)} download>
      <CloudDownload />
    </a>
  </Paper>

export default withRouter(
  withStyles(styles)(TitleCard)
)
