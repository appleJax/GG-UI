import React           from 'react'
import classNames      from 'classnames'
import { withStyles }  from 'UI/styles'
import Typography      from 'UI/Typography'
import Button          from 'UI/Button'
import CloudDownload   from 'Icons/CloudDownload'
import { DECK_DOWNLOAD_URL } from 'Utils'

const styles = (theme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  timestamp: {
    color: '#333',
    background: '#eee',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    margin: '15px',
    padding: '10px 15px'
  }
})

const TitleCard = ({
  classes: {
    container,
    timestamp
  }
}) =>
  <div className={container}>
    <Button>
      <a href={DECK_DOWNLOAD_URL} rel='noopener' target='_blank'>
        <CloudDownload />
        Download Gamegogakuen Anki Deck
      </a>
    </Button>
    <div className={timestamp}>
      Last Updated: {lastUpdated}
    </div>
  </div>

export default withStyles(styles)(DownloadDeck)
