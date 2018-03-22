import { classes } from 'Styles/common'
const { cardList } = classes

export default (theme) => ({
  cardList,
  cardTotals: {
    background: 'rgba(29,161,242,0.1)',
    borderRadius: '5px',
    color: 'rgba(0,130,210,0.8)',
    marginTop: '15px',
    padding: '5px 10px'
  },
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
