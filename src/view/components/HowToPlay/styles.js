export default (theme) => ({
  container: {
    alignItems: 'left',
    background: 'rgba(74,179,244,0.1)',
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '2em',
    margin: '0 auto',
    maxWidth: '700px',
    padding: '0 15px 15px',
    width: '100vw'
  },
  heading: {
    background: 'rgba(20,112,169,0.1)',
    borderLeft: '5px solid rgb(20,112,169)',
    color: 'rgb(20,112,169)',
    margin: '30px auto 15px',
    maxWidth: '100vw',
    padding: '10px 50px',
    textAlign: 'center',
    textShadow: '0 3px 15px rgba(0,0,0,0.3)',
    [theme.breakpoints.down('sm')]: {
      margin: '30px -15px 15px',
      width: 'calc(100% + 30px)'
    }
  },
  icon: {
    marginBottom: '-6px'
  },
  link: {
    background: 'rgba(74,179,244,0.1)',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    padding: '2px 4px',
    textDecoration: 'none',
    '&:hover': {
      background: 'rgba(74,179,244,0.2)',
      cursor: 'pointer'
    }
  },
  list: {
    marginTop: '0'
  },
  nowrap: {
    whiteSpace: 'nowrap'
  },
  pageHeader: {
    alignItems: 'center',
    background: 'rgba(74,179,244,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '15px',
    padding: '20px 0 10px'
  },
  quote: {
    background: 'rgba(74,179,244,0.1)',
    opacity: '0.9',
    padding: '20px',
    [theme.breakpoints.down('sm')]: {
      margin: '0 -15px',
      width: 'calc(100% + 30px)'
    }
  },
  text: {
    color: theme.palette.primary.dark,
    lineHeight: '2.5em',
    margin: '20px 0'
  },
  title: {
    color: theme.palette.primary.main,
    textShadow: '1px 1px #fafafa'
  },
  welcomeMessage: {
    background: theme.palette.primary.dark,
    color: 'aliceblue',
    lineHeight: '1.5em',
    margin: '0 -15px',
    padding: '30px',
    textAlign: 'center',
    width: 'calc(100% + 30px)'
  }
})