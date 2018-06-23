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
  extraMargin: {
    marginBottom: '5px'
  },
  handleClass: {
    color: 'rgba(0,0,0,0.5)'
  },
  nameClass: {
    color: 'rgba(50,50,50,0.9)'
  },
  rankDiv: {
    background: 'rgba(51,82,225,0.2)'
  },
  scoreDiv: {
    background: 'rgba(150,180,255,0.1)'
  },
  stat: {
    padding: '8px 15px',
    [theme.breakpoints.down('xs')]: {
      padding: '8px 5px',
    }
  },
  statBox: {
    textAlign: 'center',
    flexGrow: '1'
  },
  statBoxes: {
    display: 'flex',
    justifyContent: 'center'
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
    height: '26px',
    margin: '0 5px -6px',
    padding: '3px',
    transform: 'rotate(25deg)',
    width: '26px'
  },
  streakSubheader: {
    color: theme.palette.primary.dark,
    marginBottom: '5px'
  },
  streakText: {
    color: theme.palette.primary.dark
  },
  streakTitle: {
    color: 'white',
    fontSize: '20px'
  },
  timePeriod: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    fontSize: '20px'
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
      margin: '0 auto',
      width: '100vw'
    }
  }
})
