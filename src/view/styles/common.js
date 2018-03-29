import theme from './muiTheme'


export const navHeight = '88px'

export const classes = {
  cardList: {
    alignItems: 'flex-end',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
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
