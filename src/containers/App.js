import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import LeaderBoard from 'Components/LeaderBoard'
import LiveQuestions from 'Components/LiveQuestions'
import Footer from 'Components/Footer'
import NotFound from 'Components/NotFound'
import Nav from './Nav'

const App = () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path='/' component={LiveQuestions} />
      <Route path='/stats' component={LeaderBoard} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
)

export default App
