export default (theme) => ({

  appBar: {
    padding: '20px',
    width: '100%'
  },
  avatarRoot: {
    boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
    height: '44px',
    width: '44px'
  },
  beta: {
    marginLeft: '5px'
  },
  divider: {
    marginTop: '10px'
  },
  followButton: {
    height: '50px',
    margin: '35px 0 0 -130px',
    position: 'absolute',
    width: '50px'
  },
  link: {
    outline: 'none',
    textDecoration: 'none'
  },
  loggedInIcon: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    right: '0'
  },
  logo: {
    borderRadius: '20px',
    font: '1.3em Cabin Sketch',
    marginLeft: '-15px',
    padding: '10px'
  },
  navContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'calc((100vw - 1230px) / 2)'
    }
  },
  profileIcon: {
    margin: '0 5px 0 -10px'
  },
  signInIcon: {
    height: '25px',
    margin: '0 5px 0 -8px',
    width: '25px'
  },
  userHandle: {
    color: 'rgba(0,0,0,0.5)',
    marginTop: '5px',
    textShadow: '1px 1px rgba(255,255,255,0.3)'
  }

})
