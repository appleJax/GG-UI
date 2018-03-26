import { classes }   from 'Styles/common'
const { cardList, imageDiv } = classes

export default (theme) => ({
  answered: {
    boxShadow: 'none',
    opacity: '0.6'
  },
  cardList,
  cardLink: {
    margin: '10px 5px',
    textDecoration: 'none'
  },
  captionText: {
    margin: '5px',
    textShadow: `1px 1px 3px rgba(0,0,0,0.3)`
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  liveTitle: {
    background: 'rgba(51,82,225,0.1)',
    borderLeft: '5px solid rgb(51,82,225)',
    color: 'rgb(51,82,225)',
    margin: '30px 0 15px',
    maxWidth: '100vw',
    padding: '10px 50px',
    textShadow: '0 3px 15px rgba(0,0,0,0.3)'
  },
  gameTitle: {
    background: 'rgba(0,0,0,0.2)',
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    width: '240px'
  },
  imageDiv,
  questionCard: {
    alignItems: 'center',
    background: 'rgb(51,82,225)',
    display: 'flex',
    flexDirection: 'column'
  },
  timeLeftText: {
    background: 'rgba(255,255,255,0.2)',
    color: 'rgb(0,30,170)',
    padding: '3px 8px',
    textShadow: '1px 1px rgba(255,255,255,0.2)'
  }
})
