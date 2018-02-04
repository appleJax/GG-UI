import 'Src/index.css'
import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Nav from 'Components/Nav'
import LiveQuestions from 'Components/LiveQuestions'
import Stats from 'Containers/Stats'
import NotFound404 from 'Components/NotFound404'

// App
export default () => (
  <div>
    <Nav />
    <Switch>
      <Route exact path='/' component={LiveQuestions} />
      <Route path='/stats/:handle?' component={Stats} />
      <Route component={NotFound404} />
    </Switch>
  </div>
)
