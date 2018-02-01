import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader'

import Reboot from 'material-ui/Reboot'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import purple from 'material-ui/colors/purple'
import green from 'material-ui/colors/green'

import configureStore from 'Src/configureStore'
import App from 'Containers/App'

const preloadedState = JSON.parse(
  window.__PRELOADED_STATE__ || '{}'
)
const store = configureStore(preloadedState)

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
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
