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
    textAlign: 'center',
    width: '100px'
  },
  userBar: {
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
