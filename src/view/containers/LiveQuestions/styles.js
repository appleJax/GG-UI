export default (theme) => ({
  cardLink: {
    margin: '10px 5px',
    textDecoration: 'none'
  },
  cardList: {
    alignItems: 'flex-end',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  captionText: {
    margin: '5px',
    textShadow: `1px 1px 3px rgb(51,5,126)`
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  imageDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column'
    }
  },
  liveTitle: {
    background: 'rgba(121,75,196, 0.1)',
    borderLeft: '5px solid rgb(121,75,196)',
    color: 'rgb(101,55,176)',
    margin: '30px 0 15px',
    maxWidth: '100vw',
    padding: '10px 50px',
    textShadow: '0 3px 15px rgba(0,0,0,0.3)'
  },
  questionCard: {
    alignItems: 'center',
    background: 'rgb(121,75,196)',
    display: 'flex',
    flexDirection: 'column'
  },
  timeLeftText: {
    background: 'rgba(255,255,255,0.2)',
    color: 'rgb(51,5,126)',
    padding: '3px 8px',
    textShadow: '1px 1px rgba(255,255,255,0.2)'
  }
})
