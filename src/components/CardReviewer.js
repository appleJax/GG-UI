import React, { Component } from 'react'
import { array, object } from 'prop-types'
import Paper from 'UI/Paper'
import Subheader from 'UI/List/ListSubheader'
import Typography from 'UI/Typography'
import { withStyles } from 'UI/styles'

const styles = (theme) => ({
  caption: {
    padding: '5px'
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
    cardList,
    caption,
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
          FlashCards Earned: {cards.length}
        </Typography>
      </Subheader>
      <div className={cardList}>
      { cards.map(({questionText, mediaUrl, answers}, i) =>
        <Paper className={imgCard} key={i}>
          <Typography className={caption} variant='caption'>
            {questionText}
          </Typography>
          <img
            key={i}
            height='160'
            width='240'
            src={mediaUrl.image}
            alt={mediaUrl.altText}
          />
          <Typography className={caption} variant='caption'>
            {answers}
          </Typography>
        </Paper>
      )}
      </div>
    </div>
  )
}

CardReviewer.propTypes = {
  cards: array.isRequired,
  classes: object.isRequired
}

export default withStyles(styles)(CardReviewer)
