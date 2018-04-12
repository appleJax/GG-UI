import { cardWidth, classes, fullWidth } from 'Styles/common'
const { cardImage, imageContainer, imageDiv } = classes

export default (theme) => ({
  imageDiv,
  cardAnswer: {
    alignItems: 'center',
    background: 'rgba(255,255,255,0.2)',
    color: 'rgba(0,0,0,0.5)',
    display: 'flex',
    flexWrap: 'wrap',
    height: '44px',
    justifyContent: 'center',
    padding: '5px',
    width: '100%',
    '&:hover': {
      background: 'rgba(255,255,255,0.3)'
    }
  },
  cardHeader: {
    color: 'white',
    padding: '5px',
    textShadow: `1px 1px 3px rgba(0,0,0,0.3)`
  },
  cardImage,
  cardLink: {
    margin: '10px 5px',
    textDecoration: 'none'
  },
  imageCard: {
    alignItems: 'center',
    background: 'rgb(90,125,139)',
    display: 'flex',
    flexDirection: 'column',
    width: cardWidth,
    [theme.breakpoints.down('xs')]: {
      width: fullWidth
    }
  },
  imageContainer,
  gameTitle: {
    background: 'rgba(0,0,0,0.2)',
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    width: cardWidth,
    [theme.breakpoints.down('xs')]: {
      width: fullWidth
    }
  },
  green: {
    background: 'rgb(47,176,110)'
  },
  red: {
    background: 'rgb(222,73,73)'
  }
})
