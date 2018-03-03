import { classes }   from 'Styles/common'
const { cardList } = classes

export default (theme) => ({
  cardList,
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    background: 'rgba(90,125,139,0.1)',
    borderLeft: '5px solid rgb(90,125,139)',
    color: 'rgb(90,125,139)',
    margin: '30px 0 15px',
    maxWidth: '100vw',
    padding: '10px 50px',
    textShadow: '0 3px 15px rgba(0,0,0,0.3)'
  }
})
