import { cardWidth, classes, fullWidth } from 'Styles/common'
const {
  cardImage,
  cardImageAlt,
  imageContainer,
  imageDiv
} = classes

export default (theme) => ({
  imageDiv,
  cardAnswer: {
    alignItems: 'center',
    background: 'rgba(255,255,255,0.2)',
    color: 'rgba(0,0,0,0.5)',
    display: 'flex',
    flexWrap: 'wrap',
    height: '44px',
    minHeight: 'fit-content',
    justifyContent: 'center',
    padding: '5px',
    width: '100%',
    '&:hover': {
      background: 'rgba(255,255,255,0.3)'
    }
  },
  cardHeader: {
    color: 'white',
    padding: '8px',
    textShadow: `1px 1px 3px rgba(0,0,0,0.3)`
  },
  cardImage,
  cardImageAlt,
  cardLink: {
    margin: '10px 5px',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      margin: '10px 0'
    }
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
    padding: '5px',
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
