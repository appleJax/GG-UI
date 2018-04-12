import React           from 'react'
import { withRouter }  from 'react-router-dom'
import classNames      from 'classnames'
import { withStyles }  from 'UI/styles'
import Paper           from 'UI/Paper'
import Typography      from 'UI/Typography'
import CheckCircle     from 'Icons/CheckCircle'
import CloudDownload   from 'Icons/CloudDownload'
import {
  downloadUrl,
  formatGameTitle
} from 'Utils'
import { cardWidth, classes } from 'Styles/common'

const { cardImage, imageContainer } = classes

const styles = (theme) => ({
  cardImage,
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
  cardFooter: {
    alignItems: 'center',
    background: 'rgba(255,255,255,0.1)',
    color: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    padding: '5px',
    textDecoration: 'none',
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
  downloadable: {
    '&:hover': {
      background: 'rgba(255,255,255,0.2)',
      color: 'rgba(0,0,0,0.8)'
    }
  },
  imageContainer,
  label: {
    color: 'white',
    padding: '5px',
    textShadow: '1px 1px 2px #1F3195'
  }
})

const TitleCard = ({
  classes: {
    cardImage,
    cardLink,
    cardFooter,
    complete,
    counts,
    downloadable,
    imageContainer,
    label
  },
  game,
  history
}) => {
  const slug = game.slug || ''
  const fullTitle = game.fullTitle || ''
  const tweetedCards = game.tweetedCards || 0
  const totalCards = game.totalCards || 0
  const goToDeck = () => history.push(`decks/${slug}`)

  return (
    <Paper
      className={cardLink}
    >
      <div onClick={ goToDeck }>
        <Typography className={label} variant='subheading'>
          { formatGameTitle(fullTitle) }
        </Typography>
        <div className={imageContainer}>
          <img
            className={cardImage}
            src={`/images/deckTitles/${slug}.png`}
            alt={`${fullTitle} Title Screen`}
          />
        </div>
      </div>
      <a className={classNames(
           cardFooter,
           { [downloadable]: tweetedCards < 0 }
         )}
         href={ tweetedCards < 0 ? downloadUrl(fullTitle) : undefined }
         onClick={ tweetedCards >= 0 ? goToDeck : undefined }
         download
         disabled={ tweetedCards === 0 }
      >
        { tweetedCards < 0 && <CloudDownload /> }
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
