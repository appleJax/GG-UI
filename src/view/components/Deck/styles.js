import { classes } from 'Styles/common'
const { cardList } = classes

export default (theme) => ({
  cardList,
  emptyDeck: {
    background: 'rgba(0,0,0,0.1)',
    borderRadius: '5px',
    marginTop: '20px',
    padding: '15px',
    textAlign: 'center',
    textShadow: '1px 1px #eee'
  },
  header: {
    alignItems: 'center',
    background: 'rgba(29,161,242,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '25px 0 10px',
  },
  titleScreen: {
    boxShadow: '0 0 15px rgba(0,0,0,0.7)'
  }
})
