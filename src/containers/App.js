import 'normalize-scss/sass/_normalize.scss'
import 'Src/index.sass'

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'Src/configureStore'
import Nav from 'Containers/Nav'
import LeaderBoard from 'Components/LeaderBoard'
import LiveQuestions from 'Components/LiveQuestions'
import Footer from 'Components/Footer'
import NotFound from 'Components/NotFound'

const preloadedState = JSON.parse(
  window.__PRELOADED_STATE__ || {}
)
const store = configureStore(preloadedState)

export default App = () => (
  <Provider store={store}>
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={LiveQuestions} />
        <Route path='/stats' component={LeaderBoard} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </Provider>
)
