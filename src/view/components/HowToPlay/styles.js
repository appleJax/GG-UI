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
