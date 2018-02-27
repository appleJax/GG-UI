import React         from 'react'
import CountDown     from 'Components/CountDown'
import LiveQuestions from 'Containers/LiveQuestions'
import RecentAnswers from 'Containers/RecentAnswers'

const LandingPage = () => (
  <div>
    <CountDown />
    <LiveQuestions />
    <RecentAnswers />
  </div>
)

export default LandingPage
