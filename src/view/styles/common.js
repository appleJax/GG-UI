import theme from './muiTheme'


export const navHeight = '88px'
export const cardWidth = '320px'

export const classes = {
  cardImage: {
    height: 'auto',
    width: '100%',
    imageRendering: 'pixelated'
  },
  cardList: {
    alignItems: 'flex-end',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  imageContainer: {
    marginBottom: '-5px',
    width: cardWidth
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
