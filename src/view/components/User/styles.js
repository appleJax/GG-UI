const leftMargin = '30px'

export default (theme) => ({
  answeredRatioDiv: {
    background: 'rgba(51,82,225,0.1)'
  },
  answerTimeNum: {
    color: 'rgba(4,96,153,0.9)'
  },
  answerTimeStat: {
    margin: '8px 0'
  },
  avatarRoot: {
    height: '200px',
    margin: `-125px 0 0 ${leftMargin}`,
    width: '200px'
  },
  avgTimeDiv: {
    background: 'rgba(51,82,225,0.1)'
  },
  banner: {
    height: '200px'
  },
  dataPoint: {
    margin: '5px 0'
  },
  handleClass: {
    color: '#444'
  },
  nameClass: {
    color: '#222'
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
  statBox: {
    textAlign: 'center',
    width: '105px'
  },
  statBoxes: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  streak: {
    alignItems: 'center',
    color: theme.palette.primary.dark,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  streakBox: {
    alignItems: 'center',
    background: 'rgba(150,180,255,0.1)',
    // background: 'rgba(74,179,244,0.1)',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '15px'
  },
  streakHeader: {
    alignItems: 'center',
    background: theme.palette.primary.dark,
    display: 'flex',
    justifyContent: 'center',
    padding: '8px'
  },
  streakIcon: {
    background: theme.palette.primary.light,
    borderRadius: '50%',
    boxShadow: '1px 1px 2px rgba(0,0,0,0.1)',
    color: theme.palette.primary.dark,
    height: '30px',
    margin: '0 5px -6px',
    padding: '3px',
    transform: 'rotate(25deg)',
    width: '30px',
  },
  streakSubheader: {
    color: theme.palette.primary.dark,
    marginBottom: '5px'
  },
  streakText: {
    color: theme.palette.primary.dark
  },
  streakTitle: {
    color: 'white'
  },
  timePeriod: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main
  },
  totalRatioDiv: {
    background: 'rgba(150,180,255,0.1)'
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
    flexDirection: 'column',
    marginLeft: '25px',
    maxWidth: '100vw',
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto'
    }
  }
})
