import React          from 'react'
import Loadable       from 'react-loadable'
import { withStyles } from 'UI/styles'
import { navHeight }  from 'Styles/common'
// import Decks          from 'Containers/Decks'
import Nav            from 'Containers/Nav'
// import Stats          from 'Containers/Stats'
// import HowToPlay      from 'Components/HowToPlay'
// import LandingPage    from 'Components/LandingPage'
// import NotFound404    from 'Components/NotFound404'
import Spinner from 'Components/Spinner'
import {
  Link,
  Route,
  Switch
} from 'react-router-dom'

const Decks = Loadable({
  loader: () => import('Containers/Decks'),
  loading: Spinner
})
const HowToPlay = Loadable({
  loader: () => import('Components/HowToPlay'),
  loading: Spinner
})
const LandingPage = Loadable({
  loader: () => import('Components/LandingPage'),
  loading: Spinner
})
const Stats = Loadable({
  loader: () => import('Containers/Stats'),
  loading: Spinner
})
const NotFound404 = Loadable({
  loader: () => import('Components/NotFound404'),
  loading: Spinner
})


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
