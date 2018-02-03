import 'Src/index.css'
import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import BottomNavigation from 'UI/BottomNavigation'

import Nav from 'Components/Nav'
import LiveQuestions from 'Components/LiveQuestions'
import Scoreboard from 'Containers/Scoreboard'
import User from 'Containers/User'
import NotFound404 from 'Components/NotFound404'

// App
export default () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path='/' component={LiveQuestions} />
      <Route exact path='/stats' component={Scoreboard} />
      <Route path='/stats/:handle' component={User} />
      <Route component={NotFound404} />
    </Switch>
  </div>
)
