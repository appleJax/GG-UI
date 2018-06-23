import theme from './muiTheme'

export const navHeight = '88px'
export const cardWidth = '320px'
export const fullWidth = '100vw'
export const rowHeight = 95

export const classes = {
  cardImage: {
    height: 'auto',
    minHeight: '200px',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      imageRendering: 'pixelated'
    }
  },
  cardImageAlt: {
    [theme.breakpoints.down('xs')]: {
      imageRendering: 'crisp-edges'
    }
  },
  cardList: {
    alignItems: 'flex-end',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  imageContainer: {
    marginBottom: '-5px',
    width: cardWidth,
    [theme.breakpoints.down('xs')]: {
      width: fullWidth
    }
  },
  imageDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column'
    }
  }
}
