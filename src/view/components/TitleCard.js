import React           from 'react'
import { withRouter }  from 'react-router-dom'
import { withStyles }  from 'UI/styles'
import Paper           from 'UI/Paper'
import Typography      from 'UI/Typography'
import CheckCircle     from 'Icons/CheckCircle'
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
  complete: {
    color: 'rgba(0,0,0,0.5)',
    height: '20px',
    width: '20px'
  },
  counts: {
    color: 'rgba(0,0,0,0.7)',
    margin: '0 8px'
  },
  downloadIcon: {
    alignItems: 'center',
    background: 'rgba(255,255,255,0.1)',
    color: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
    '&:hover': {
      background: 'rgba(255,255,255,0.2)',
      color: 'rgba(0,0,0,0.8)'
    }
  },
  label: {
    color: 'white',
    padding: '5px',
    textShadow: '1px 1px 2px #1F3195'
  },
  titleImg: {
    maxHeight: '180px'
  }
})

const TitleCard = ({
  classes: {
    cardLink,
    complete,
    counts,
    downloadIcon,
    label,
    titleImg
  },
  game,
  history
}) => {
  const slug = game.slug || ''
  const fullTitle = game.fullTitle || ''
  const tweetedCards = game.tweetedCards || 0
  const totalCards = game.totalCards || 0

  return (
    <Paper
      className={cardLink}
    >
      <div onClick={() => history.push(`decks/${slug}`)}>
        <Typography className={label} variant='subheading'>
          { fullTitle }
        </Typography>
        <img
          className={titleImg}
          src={`/images/deckTitles/${slug}.png`}
          alt={`${fullTitle} Title Screen`}
        />
      </div>
      <a className={downloadIcon} href={downloadUrl(fullTitle)} download>
        <CloudDownload />
        <Typography className={counts}>
          { tweetedCards } / { totalCards }
        </Typography>
        { totalCards > 0 && tweetedCards === totalCards &&
          <CheckCircle className={complete} />
        }
      </a>
    </Paper>
  )
}

export default withRouter(
  withStyles(styles)(TitleCard)
)
