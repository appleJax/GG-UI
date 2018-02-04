export default (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    [theme.breakpoints.only('md')]: {
      width: '60%'
    },
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  cellPadding: {
    padding: '15px 30px'
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
  center: {
    textAlign: 'center'
  },
  searchInput: {
    marginTop: '25px'
  }
})
