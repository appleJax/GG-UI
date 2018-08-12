import React          from 'react'
import { withStyles } from 'UI/styles'
import { navHeight }  from 'Styles/common'
import Nav            from 'Containers/Nav'
import LazyLoad       from 'Components/LazyLoad'
import {
  Route,
  Switch
} from 'react-router-dom'

const Decks       = LazyLoad({ loader: () => import('Containers/Decks') })
const HowToPlay   = LazyLoad({ loader: () => import('Components/HowToPlay') })
const LandingPage = LazyLoad({ loader: () => import('Components/LandingPage') })
const Stats       = LazyLoad({ loader: () => import('Containers/Stats') })
const NotFound404 = LazyLoad({ loader: () => import('Components/NotFound404') })

const styles = {
  appContainer: {
    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.4)',
    margin: '0 auto',
    maxWidth: '1200px',
    minHeight: `calc(100vh - ${navHeight})`
  }
}

const App = ({ classes: { appContainer } }) => (
  <div>
    <Nav />
    <div className={appContainer}>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/stats/:handle?' component={Stats} />
        <Route path='/decks/:game?'   component={Decks} />
        <Route path='/how-to-play'    component={HowToPlay} />
        <Route component={NotFound404} />
      </Switch>
    </div>
  </div>
)

export default withStyles(styles)(App)
