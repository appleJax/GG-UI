import { createMuiTheme } from 'UI/styles'

export default createMuiTheme({
  palette: {
    primary: {
      main: '#1DA1F2'
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: 'aliceblue'
    },
    contrastThreshold: 2
  },
  text: {
    primary: 'rgba(255,255,255,0.87)'
  },
  typography: {
    fontSize: '24px'
  },
  overrides: {
    MuiAvatar: {
      root: {
        height: '50px',
        width: '50px'
      }
    },
    MuiListItem: {
      disabled: {
        background: 'aliceblue',
        borderLeft: '3px solid #1DA1F2',
        color: '#1DA1F2 !important',
        opacity: '1'
      }
    },
    MuiMenuItem: {
      root: {
        color: '#1470A9',
        paddingLeft: '30px',
        '&:hover': {
          background: 'rgba(74,179,244,0.1)',
        }
      }
    },
    MuiTab: {
      label: {
        fontSize: '20px'
      }
    },
    MuiTableCell: {
      root: {
        textAlign: 'center'
      },
      paddingDefault: {
        padding: '5px'
      },
      typeBody: {
        fontSize: '20px'
      },
      typeHead: {
        fontSize: '20px'
      }
    }
  }
})
