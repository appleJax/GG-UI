export default (theme) => ({
  cardLink: {
    margin: '10px 0',
    textDecoration: 'none'
  },
  captionText: {
    margin: '5px',
    textShadow: `1px 1px 3px ${theme.palette.primary.dark}`
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
    margin: '30px 0 15px',
    textShadow: '0 3px 15px rgba(0,0,0,0.5)'
  },
  questionCard: {
    alignItems: 'center',
    background: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column'
  },
  timeLeftText: {
    background: 'rgba(255,255,255,0.2)',
    color: theme.palette.primary.dark,
    padding: '3px 8px',
    textShadow: '1px 1px rgba(255,255,255,0.2)'
  }
})
