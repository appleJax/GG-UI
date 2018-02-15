import '../../static/index.css'
import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import { withStyles } from 'UI/styles'
import { navHeight } from 'Styles/variables'
import Nav from 'Containers/Nav'
import LiveQuestions from 'Containers/LiveQuestions'
import Stats from 'Containers/Stats'
import NotFound404 from 'Components/NotFound404'

const styles = {
  appContainer: {
    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.4)',
    margin: '0 auto',
    maxWidth: '1200px',
    minHeight: `calc(100vh - ${navHeight})`
  }
}

function App(props) {
  const { appContainer } = props.classes

  return (
    <div>
      <Nav />
      <div className={appContainer}>
        <Switch>
          <Route exact path='/' component={LiveQuestions} />
          <Route path='/stats/:handle?' component={Stats} />
          <Route component={NotFound404} />
        </Switch>
      </div>
    </div>
  )
}

export default withStyles(styles)(App)
