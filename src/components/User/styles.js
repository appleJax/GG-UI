const leftMargin = '30px'

export default (theme) => ({
  avatarRoot: {
    height: '200px',
    margin: `-125px 0 0 ${leftMargin}`,
    width: '200px'
  },
  banner: {
    height: '200px'
  },
  label: {
    color: theme.palette.primary.main,
    padding: '5px 12px 5px 5px',
    textTransform: 'none',
    '&:hover': {
      color: theme.palette.secondary.main
    }
  },
  followButton: {
    height: '20px',
    margin: '8px 0',
    padding: '0',
    '&:hover': {
      background: theme.palette.primary.light,
    }
  },
  followImage: {
    background: theme.palette.secondary.main,
    borderRadius: '50%',
    marginRight: '3px'
  },
  statBox: {
    margin: '0 5px',
    textAlign: 'center',
    width: '100px'
  },
  timePeriod: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main
  },
  userBar: {
    color: theme.palette.primary.dark,
    display: 'flex',
    paddingBottom: '3px',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column'
    }
  },
  userIdentity: {
    marginLeft: leftMargin
  },
  userStats: {
    display: 'flex',
    marginLeft: '25px',
    [theme.breakpoints.only('xs')]: {
      marginLeft: '12px'
    }
  }
})
