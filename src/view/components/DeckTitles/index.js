import React          from 'react'
import { withStyles } from 'UI/styles'
import payloadStates  from 'Constants/PayloadStates'
import EmptyMessage   from 'Components/EmptyMessage'
import Typography     from 'UI/Typography'
import TitleCard      from 'Components/TitleCard'
import Spinner        from 'Components/Spinner'
import styles         from './styles'

const {
  FETCHING,
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
    header,
    pageTitle,
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
      <div className={header}>
        <Typography className={pageTitle} variant='display1'>
          Flashcard Decks
        </Typography>
      </div>
      <div className={cardList}>
        { titleDisplay }
      </div>
      <div className={spacer} />
      <footer className={anki}>
        <a href='https://apps.ankiweb.net'
           target='_blank'
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
          >2.1 recommended</a>)
        </Typography>
      </footer>
    </div>
    </>
  )
}

export default withStyles(styles)(DeckTitles)
