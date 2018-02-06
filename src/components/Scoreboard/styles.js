export default (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '60%'
    },
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
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
  rankNumber: {
    fontFamily: 'Rammetto One',
  },
  smallNumber: {
    fontFamily: 'Rammetto One',
    fontSize: '14px'
  },
  searchInput: {
    marginTop: '25px'
  },
  tabs: {
    background: theme.palette.primary.light,
    fontSize: '20px'
  }
})
