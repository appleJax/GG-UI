import React          from 'react'
import { withStyles } from 'UI/styles'
import payloadStates  from 'Constants/PayloadStates'
import Typography     from 'UI/Typography'
import TitleCard      from 'Components/TitleCard'
import Spinner        from 'Components/Spinner'
import { classes, navHeight }    from 'Styles/common'

const { cardList } = classes
const {
  FETCHING,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

const styles = (theme) => ({
  anki: {
    alignItems: 'flex-end',
    background: '#ddd',
    display: 'flex',
    flexShrink: '0',
    marginTop: '15px',
    padding: '10px'
  },
  ankiImg: {
    marginBottom: '-5px'
  },
  cardList,
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: `calc(100vh - ${navHeight})`
  },
  header: {
    alignItems: 'center',
    background: 'rgba(63,81,181,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px 0 10px',
  },
  pageTitle: {
    color: '#3F51B5',
    textShadow: '1px 1px white'
  },
  spacer: {
    flexGrow: 1000
  }
})

function DeckTitles({
  classes: {
    anki,
    ankiImg,
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
    titleDisplay = <h2>Error Loading...</h2>
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
        <Typography variant='caption'>
          Flashcard decks require Anki (
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
