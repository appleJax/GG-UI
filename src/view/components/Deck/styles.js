import { classes } from 'Styles/common'
const { cardList } = classes

export default (theme) => ({
  cardList,
  header: {
    alignItems: 'center',
    background: 'rgba(29,161,242,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '15px',
    padding: '25px 0 10px',
  },
  titleScreen: {
    boxShadow: '0 0 15px rgba(0,0,0,0.7)'
  }
})
