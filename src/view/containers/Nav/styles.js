export default (theme) => ({

  appBar: {
    padding: '20px',
    width: '100%'
  },
  avatarRoot: {
    boxShadow: '1px 1px 2px rgba(255,255,255,0.5)',
    height: '44px',
    width: '44px'
  },
  divider: {
    marginTop: '10px'
  },
  followButton: {
    margin: '0 0 -45px 18px'
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
    fontFamily: 'Cabin Sketch',
    '&:hover': {
      cursor: 'pointer'
    }
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
  userHandle: {
    color: 'rgba(0,0,0,0.5)',
    marginTop: '5px',
    textShadow: '1px 1px rgba(255,255,255,0.3)'
  }

})
