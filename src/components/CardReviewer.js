import React from 'react'
import { array, object } from 'prop-types'
import Paper from 'UI/Paper'
import Subheader from 'UI/List/ListSubheader'
import Typography from 'UI/Typography'
import { withStyles } from 'UI/styles'

const styles = (theme) => ({
  cardAnswer: {
    background: 'rgba(255,255,255,0.2)',
    color: theme.palette.primary.dark,
    marginTop: '-5px',
    padding: '5px'
  },
  cardHeader: {
    color: 'white',
    padding: '5px',
    textShadow: `1px 1px 3px ${theme.palette.primary.dark}`
  },
  cardList: {
    alignItems: 'flex-end',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  container: {
    width: '100%'
  },
  imgCard: {
    background: theme.palette.primary.light,
    marginBottom: '20px',
    width: '240px'
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  subHeader: {
    padding: '0',
    width: '100%'
  },
  title: {
    background: 'rgba(0, 0, 0, 0.6)',
    color: '#eee',
    padding: '5px',
    paddingLeft: '30px'
  }
})

function CardReviewer({
  cards,
  classes: {
    cardAnswer,
    cardList,
    cardHeader,
    container,
    imgCard,
    row,
    subHeader,
    title
  }
}) {

  return (
    <div className={container}>
      <Subheader classes={{root: subHeader}} component='div'>
        <Typography className={title} variant='subheading'>
          FlashCards Earned: {cards ? cards.length : '???'}
        </Typography>
      </Subheader>
      <div className={cardList}>
      { !cards
        ? <h2>Loading...</h2>
        : cards.map(({questionText, mediaUrl, answers}, i) =>
            <Paper className={imgCard} key={i}>
              <Typography className={cardHeader} variant='body1'>
                {questionText}
              </Typography>
              <img
                key={i}
                height='160'
                width='240'
                src={mediaUrl.image}
                alt={mediaUrl.altText}
              />
              <Typography className={cardAnswer} variant='caption'>
                {answers}
              </Typography>
            </Paper>
      )}
      </div>
    </div>
  )
}

CardReviewer.propTypes = {
  cards:   array,
  classes: object.isRequired
}

export default withStyles(styles)(CardReviewer)
