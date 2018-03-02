export default (theme) => ({
  cardAnswer: {
    background: 'rgba(255,255,255,0.2)',
    color: 'rgba(0,0,0,0.5)',
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '-5px',
    padding: '5px'
  },
  cardHeader: {
    color: 'white',
    padding: '5px',
    textShadow: `1px 1px 3px rgba(0,0,0,0.3)`
  },
  cardLink: {
    margin: '10px 5px',
    textDecoration: 'none'
  },
  imgCard: {
    background: theme.palette.primary.light,
    width: '240px'
  },
  green: {
    background: '#4CAF50'
  },
  red: {
    background: '#B71C1C'
  }
})
