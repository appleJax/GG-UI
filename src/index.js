import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import Reboot from 'UI/Reboot'
import { MuiThemeProvider, createMuiTheme } from 'UI/styles'
import cyan from 'UI/colors/cyan'

import configureStore from 'Src/configureStore'
import App from 'Containers/App'

const preloadedState = JSON.parse(
  window.__PRELOADED_STATE__ || '{}'
)
const store = configureStore(preloadedState)


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2A93D4'
    },
    secondary: {
      main: '#fff',
    }
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
    MuiTab: {
      label: {
        fontSize: '24px'
      }
    },
    MuiTableCell: {
      root: {
        textAlign: 'center'
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

const render = (Component) =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <Reboot />
          <Router>
            <Component />
          </Router>
        </MuiThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  )

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('Containers/App', () => {
    render(App)
  })
}
