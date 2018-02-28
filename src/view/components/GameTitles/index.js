import React          from 'react'
import { withStyles } from 'UI/styles'
import payloadStates  from 'Constants/PayloadStates'
import Typography     from 'UI/Typography'
import TitleCard      from 'Components/TitleCard'
import Spinner        from 'Components/Spinner'
import { classes }    from 'Styles/common'

const { cardList } = classes
const {
  FETCHING,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

const styles = (theme) => ({
  cardList,
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
  }
})

function GameTitles({
  classes: {
    cardList,
    header,
    pageTitle
  },
  gameTitles
}) {

  let titleDisplay
  if (gameTitles.state === ERROR_FETCHING)
    titleDisplay = <h2>Error Loading...</h2>
  else if (gameTitles.state !== RESOLVED)
    titleDisplay = <Spinner color='deck' />
  else
    titleDisplay = gameTitles.data.map((title, i) =>
      <TitleCard key={i} game={title} />
    )

  return (
    <>
      <div className={header}>
        <Typography className={pageTitle} variant='display1'>
          Game Decks
        </Typography>
      </div>
      <div className={cardList}>
        { titleDisplay }
      </div>
    </>
  )
}

export default withStyles(styles)(GameTitles)
