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
    //background: theme.palette.primary.light,
    background: theme.palette.grey[200],
    color: theme.palette.primary.dark,
    display: 'flex',
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
