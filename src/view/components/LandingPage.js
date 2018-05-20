import React         from 'react'
import { withStyles } from 'UI/styles'
import CountDown     from 'Components/CountDown'
import LiveQuestions from 'Containers/LiveQuestions'
import RecentAnswers from 'Containers/RecentAnswers'
import LandingFooter from 'Components/LandingFooter'
import { navHeight } from 'Styles/common'

const styles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: `calc(100vh - ${navHeight})`
  }
})

const Spacer = () => (
  <div style={{ flexGrow: '100' }} />
)

const LandingPage = ({ classes }) => (
  <div className={classes.container}>
    <CountDown />
    <LiveQuestions />
    <RecentAnswers />
    <Spacer />
    <LandingFooter />
  </div>
)

export default withStyles(styles)(LandingPage)
