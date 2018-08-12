import React          from 'react'
import { withStyles } from 'UI/styles'
import payloadStates  from 'Constants/PayloadStates'
import EmptyMessage   from 'Components/EmptyMessage'
import PageTitle      from 'Components/PageTitle'
import Typography     from 'UI/Typography'
import TitleCard      from 'Components/TitleCard'
import DownloadDeck   from 'Components/DownloadDeck'
import Spinner        from 'Components/Spinner'
import styles         from './styles'

const {
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

function DeckTitles({
  classes: {
    anki,
    ankiImg,
    ankiInfo,
    cardList,
    container,
    spacer
  },
  deckTitles
}) {
  let titleDisplay
  if (deckTitles.state === ERROR_FETCHING)
    titleDisplay = <EmptyMessage error={true} />
  else if (deckTitles.state !== RESOLVED)
    titleDisplay = <Spinner color='deck' />
  else
    titleDisplay = deckTitles.data.map((title, i) =>
      <TitleCard key={i} game={title} />
    )

  return (
    <>
    <div className={container}>
      <PageTitle color='decks'>
        Flashcard Decks
      </PageTitle>
      <div className={cardList}>
        { titleDisplay }
      </div>
      <div className={spacer} />
      <DownloadDeck />
      <footer className={anki}>
        <a href='https://apps.ankiweb.net'
           target='_blank'
           rel='noopener'
        >
          <img
            className={ankiImg}
            src={'/images/anki-icon.svg'}
            alt='anki icon'
          />
        </a>
        <Typography variant='caption' className={ankiInfo}>
          Downloadable flashcard decks require Anki (
          <a href='https://apps.ankiweb.net/docs/beta.html'
             target='_blank'
             rel='noopener'
          >2.1 recommended</a>)
        </Typography>
      </footer>
    </div>
    </>
  )
}

export default withStyles(styles)(DeckTitles)
