import React                       from 'react'
import ReactDOM                    from 'react-dom'
import Provider                    from 'react-redux/es/components/Provider'
import { BrowserRouter as Router } from 'react-router-dom'
import AppContainer                from 'react-hot-loader/lib/AppContainer'

import CssBaseline                 from 'UI/CssBaseline'
import { MuiThemeProvider }        from 'UI/styles'

import configureStore              from 'Src/configureStore'
import theme                       from 'Styles/muiTheme'
import App                         from 'Containers/App'

const preloadedState = JSON.parse(
  window.__PRELOADED_STATE__ || '{}'
)
const store = configureStore(preloadedState)

const render = (Component) =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Component />
          </Router>
        </MuiThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('Containers/App', () => {
    render(App)
  })
}
