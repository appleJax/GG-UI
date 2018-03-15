const leftMargin = '30px'

export default (theme) => ({
  answeredRatioDiv: {
    background: 'rgba(51,82,225,0.1)'
  },
  avgTimeDiv: {
    background: 'rgba(51,82,225,0.1)'
  },
  rankDiv: {
    background: 'rgba(51,82,225,0.2)'
  },
  scoreDiv: {
    background: 'rgba(150,180,255,0.1)'
  },
  stat: {
    padding: '8px 0'
  },
  totalRatioDiv: {
    background: 'rgba(150,180,255,0.1)'
  },
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
    color: theme.palette.primary.dark,
    display: 'flex',
    paddingBottom: '3px',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column'
    }
  },
  userIdentity: {
    margin: `8px 0 0 ${leftMargin}`
  },
  userStats: {
    display: 'flex',
    marginLeft: '25px',
    [theme.breakpoints.only('xs')]: {
      marginLeft: '12px'
    }
  }
})
