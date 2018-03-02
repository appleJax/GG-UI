export default (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '60%'
    },
  },
  avatarRoot: {
    height: '48px',
    width: '48px'
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  emptyScores: {
    background: '#f8f8f8',
    color: 'rgba(0, 0, 0, 0.4)',
    fontWeight: 'bold',
    padding: '20px 0',
    textShadow: '1px 1px #fff'
  },
  loggedInRow: {
    background: '#BBDEFB'
  },
  headerCell: {
    background: theme.palette.primary.main,
    color: 'white'
  },
  hover: {
    '&:hover': {
      cursor: 'pointer',
      background: theme.palette.primary.light
    }
  },
  nameCell: {
    fontWeight: 'bold',
    fontSize: '18px',
    paddingLeft: '10%',
    textAlign: 'left'
  },
  playerColumn: {
    width: '398px'
  },
  rankColumn: {
    width: '105px'
  },
  rankNumber: {
    fontFamily: 'Rammetto One',
  },
  scoreColumnn: {
    width: '156px'
  },
  smallNumber: {
    fontFamily: 'Rammetto One',
    fontSize: '14px'
  },
  searchInput: {
    marginTop: '30px'
  },
  tabs: {
    background: theme.palette.primary.light,
    fontSize: '20px'
  }
})
