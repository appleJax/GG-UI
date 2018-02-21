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
  cardLink: {
    margin: '10px 5px',
    textDecoration: 'none'
  },
  imgCard: {
    background: theme.palette.primary.light,
    width: '240px'
  }
})
