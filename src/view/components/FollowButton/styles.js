 export default (theme) => ({
  follow: {
    background: '#fff',
    height: '20px',
    margin: '8px 0',
    padding: '0',
    '&:hover': {
      background: theme.palette.primary.light,
    }
  },
  following: {
    alignItems: 'center',
    background: '#fff',
    borderRadius: '1px',
    display: 'flex',
    fontFamily: 'Roboto',
    justifyContent: 'center',
    margin: '8px 0',
    padding: '5px 10px 5px 8px',
    width: 'fit-content'
  },
  followImage: {
    background: theme.palette.secondary.main,
    borderRadius: '50%',
    marginRight: '3px'
  },
  label: {
    color: theme.palette.primary.main,
    padding: '5px 12px 5px 5px',
    textTransform: 'none',
    '&:hover': {
      color: theme.palette.secondary.main
    }
  },
  visibility: {
    alignItems: 'center',
    background: 'white',
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px',
    width: '150px',
    '&:hover': {
      background: '#fafafa'
    }
  }
})
