import React, { Component } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import LeaderBoard from '../components/LeaderBoard'
import LiveQuestions from '../components/LiveQuestions'
import Footer from '../components/footer'
import NotFound from '../components/NotFound'
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
