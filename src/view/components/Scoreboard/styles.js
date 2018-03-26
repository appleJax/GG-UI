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
  loggedInRow: {
    background: '#BBDEFB'
  },
  headerCell: {
    background: theme.palette.primary.main,
    padding: '15px 8% 15px'
  },
  headerRow: {
    display: 'flex',
    flexDirection: 'row'
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
    flexGrow: 2
  },
  playerHeader: {
    textAlign: 'center'
  },
  rankColumn: {
    flexGrow: 1,
    maxWidth: '100px'
  },
  rankNumber: {
    alignItems: 'center',
    display: 'flex',
    fontFamily: 'Rammetto One',
    fontSize: '1.2em'
  },
  scoreColumn: {
    flexGrow: 1,
    textAlign: 'right'
  },
  searchInput: {
    marginTop: '30px'
  },
  smallNumber: {
    fontFamily: 'Rammetto One',
    fontSize: '14px'
  },
  stripe: {
    background: 'rgba(150,180,255,0.1)'
  },
  tableBody: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100vh - 276px)',
    minHeight: 'calc(100vh - 276px)',
    maxWidth: '100vw',
    overflowY: 'scroll'
  },
  tableCell: {
    padding: '10px 8% 10px'
  },
  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '100vw',
    minHeight: '82px',
    overflow: 'hidden'
  },
  tabs: {
    background: theme.palette.primary.light,
    fontSize: '20px'
  }
})
