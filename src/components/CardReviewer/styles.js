export default (theme) => ({
  cardAnswer: {
    background: 'rgba(255,255,255,0.2)',
    color: theme.palette.primary.dark,
    marginTop: '-5px',
    padding: '5px'
  },
  cardHeader: {
    color: 'white',
    padding: '5px',
    textShadow: `1px 1px 3px ${theme.palette.primary.dark}`
  },
  cardList: {
    alignItems: 'flex-end',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  container: {
    width: '100%'
  },
  imgCard: {
    background: theme.palette.primary.light,
    marginBottom: '20px',
    width: '240px'
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  subHeader: {
    padding: '0',
    width: '100%'
  },
  title: {
    background: 'rgba(0, 0, 0, 0.6)',
    color: '#eee',
    padding: '5px',
    paddingLeft: '30px'
  }
})
