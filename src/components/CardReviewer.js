import React, { Component } from 'react'
import { array, object } from 'prop-types'
import Subheader from 'UI/List/ListSubheader'
import Typography from 'UI/Typography'
import { withStyles } from 'UI/styles'

const styles = (theme) => ({
  cardList: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'left'
    }
  },
  imgCard: {
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)'
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
    borderRadius: '0 0 5px 5px',
    color: '#eee',
    padding: '5px',
    paddingLeft: '30px'
  }
})

function CardReviewer({
  cards,
  classes: {
    cardList,
    imgCard,
    row,
    subHeader,
    title
  }
}) {

  return (
    <div className={cardList}>
      <Subheader classes={{root: subHeader}} component='div'>
        <Typography className={title} variant='subheading'>
          FlashCards Earned: {cards.length}
        </Typography>
      </Subheader>
      { cards.map((card, i) =>
        <div className={row} key={i}>
          { card.mediaUrls.map((mediaUrl, index) =>
              <img
                className={imgCard}
                key={`${i}-${index}`}
                height='160'
                width='240'
                src={mediaUrl.image}
                alt={mediaUrl.altText}
              />
          )}
        </div>
      )}
    </div>
  )
}

CardReviewer.propTypes = {
  cards: array.isRequired,
  classes: object.isRequired
}

export default withStyles(styles)(CardReviewer)
