import 'Src/index.sass'
import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import AppBar from 'material-ui/AppBar'
import BottomNavigation from 'material-ui/BottomNavigation'

import Nav from 'Containers/Nav'
import LiveQuestions from 'Components/LiveQuestions'
import Scoreboard from 'Containers/Scoreboard'
import User from 'Containers/User'
import Footer from 'Components/Footer'
import NotFound404 from 'Components/NotFound404'

// App
export default () => (
  <div>
    <AppBar children='GameGogakuen' />
    <Switch>
      <Route exact path='/' component={LiveQuestions} />
      <Route exact path='/stats' component={Scoreboard} />
      <Route path='/stats/:handle' component={User} />
      <Route component={NotFound404} />
    </Switch>
    <BottomNavigation children='© 2018 GameGogakuen' />
  </div>
)
