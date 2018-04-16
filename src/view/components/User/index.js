import React          from 'react'
import classNames     from 'classnames'
import payloadStates  from 'Constants/PayloadStates'
import { withStyles } from 'UI/styles'
import Avatar         from 'UI/Avatar'
import Button         from 'UI/Button'
import Typography     from 'UI/Typography'
import CardReviewer   from 'Components/CardReviewer'
import EmptyMessage   from 'Components/EmptyMessage'
import FollowButton   from 'Components/FollowButton'
import Spinner        from 'Components/Spinner'
import FlashOn        from 'Icons/FlashOn'
import styles         from './styles'
import { object, string } from 'prop-types'
import {
  formatHMS,
  formatRatio
} from 'Utils'

const {
  LOGGED_IN,
  INITIAL_STATE,
  FETCHING,
  NOT_FOUND,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

function User({
  classes: {
    answeredRatioDiv,
    answerTimeHeading,
    answerTimeNum,
    answerTimeStat,
    avatarRoot,
    avgTimeDiv,
    banner,
    dataPoint,
    handleClass,
    nameClass,
    rankDiv,
    scoreDiv,
    stat,
    statBox,
    statBoxes,
    streak,
    streakBox,
    streakHeader,
    streakIcon,
    streakSubheader,
    streakText,
    streakTitle,
    timePeriod,
    totalRatioDiv,
    userBar,
    userIdentity,
    userStats
  },
  handleParam,
  user
}) {

  if (user.state === NOT_FOUND)
    return <EmptyMessage message={`User @${handleParam} not found...`} />

  if (user.state === ERROR_FETCHING)
    return <EmptyMessage error={true} />

  if (
    user.state === INITIAL_STATE ||
    user.state === FETCHING ||
    user.data.handle !== handleParam
  ) return <Spinner />

  const {
    allTimeStats,
    avatar,
    dailyStats,
    handle,
    monthlyStats,
    name,
    profileBanner,
    userId,
    weeklyStats
  } = user.data

  return (
    <div>
      <header
        className={banner}
        style={{background: `url(${profileBanner})`}}
      />
      <div className={userBar}>
        <div>
          <Avatar
            alt='user avatar'
            classes={{root: avatarRoot}}
            src={avatar.replace('_normal.', '_400x400.')}
          />
          <div className={userIdentity}>
            <Typography variant='title' className={nameClass}>{ name }</Typography>
            <Typography variant='subheading' className={handleClass}>{ `@${handle}` }</Typography>
            <FollowButton handle={handle} userId={userId} />
          </div>
        </div>
        <div className={userStats}>
          <div className={streakHeader}>
            <Typography variant='title' className={streakTitle}>
              <FlashOn className={streakIcon} /> Streaks
            </Typography>
          </div>
          <div className={streakBox}>
            <div className={streak}>
              <Typography variant='body2' className={streakSubheader}>
                CURRENT
              </Typography>
              <Typography variant='body1' className={streakText}>
                Answered: { allTimeStats.currentAnswerStreak }
              </Typography>
              <Typography variant='body1' className={streakText}>
                Correct: { allTimeStats.currentCorrectStreak }
              </Typography>
            </div>
            <div className={streak}>
              <Typography variant='body2' className={streakSubheader}>
                LONGEST
              </Typography>
              <Typography variant='body1' className={streakText}>
                Answered: { allTimeStats.longestAnswerStreak }
              </Typography>
              <Typography variant='body1' className={streakText}>
                Correct: { allTimeStats.longestCorrectStreak }
              </Typography>
            </div>
          </div>
          <div className={statBoxes}>
        {
          [weeklyStats, monthlyStats, allTimeStats].map((stats, i) => {
            const rawLowestAvgAnswerTime = stats.lowestAvgAnswerTime
              ? stats.lowestAvgAnswerTime.value
              : dailyStats.lowestAvgAnswerTime.value

            const lowestAvgAnswerTime = rawLowestAvgAnswerTime < 86400
              ? formatHMS(rawLowestAvgAnswerTime)
              : 'N/A'

            const avgAnswerTime = stats.avgAnswerTime > 0
              ? formatHMS(stats.avgAnswerTime)
              : 'N/A' 

            let label = 'ALL TIME'
            let category = ''
            if (i === 0) {
              label = 'WEEKLY'
              category = 'Week'
            }
            if (i === 1) {
              label = 'MONTHLY'
              category = 'Month'
            }

            let currentDescriptor = `This ${category}`
            let bestDescriptor = 'Best'
            if (label === 'ALL TIME') {
              currentDescriptor = 'All Time'
              bestDescriptor = 'Best Daily'
            }

            return (
              <div key={i} className={statBox}>
                <Typography className={timePeriod} variant='subheading'>{label}</Typography>
                <div className={classNames(scoreDiv, stat)}>
                  <Typography variant='subheading'>Score: {stats.score}</Typography>
                  { stats.average
                    ? <>
                        <Typography variant='caption' className={dataPoint}>
                          Average: {stats.average.value || stats.score}
                        </Typography>
                        <Typography variant='caption' className={dataPoint}>
                          Highest: { stats.highestScore.value || 'N/A' }
                        </Typography>
                      </>
                    : <>
                        <Typography variant='caption' className={dataPoint}>
                          Daily Average: {dailyStats.average.value || stats.score}
                        </Typography>
                        <Typography variant='caption' className={dataPoint}>
                          Highest: { dailyStats.highestScore.value || 'N/A' }
                        </Typography>
                      </>
                  }
                </div>
                <div className={classNames(answeredRatioDiv, stat)}>
                  <Typography variant='body1'>{formatRatio(stats)}</Typography>
                  <Typography variant='caption'>Correct of</Typography>
                  <Typography variant='caption'>ANSWERED</Typography>
                </div>
                <div className={classNames(totalRatioDiv, stat)}>
                  <Typography variant='body1'>{formatRatio(stats, true)}</Typography>
                  <Typography variant='caption'>Correct of</Typography>
                  <Typography variant='caption'>TOTAL</Typography>
                </div>
                <div className={classNames(avgTimeDiv, stat)}>
                  <Typography variant='caption' className={answerTimeHeading}>
                    AVERAGE  
                  </Typography>
                  <Typography variant='caption' className={answerTimeHeading}>
                    ANSWER TIME
                  </Typography>
                  <div className={answerTimeStat}>
                    <Typography variant='caption'>{ currentDescriptor }:</Typography>
                    <Typography variant='caption' className={answerTimeNum}>{ avgAnswerTime }</Typography>
                  </div>
                  <div className={answerTimeStat}>
                    <Typography variant='caption'>{ bestDescriptor }:</Typography>
                    <Typography variant='caption' className={answerTimeNum}>{ lowestAvgAnswerTime }</Typography>
                  </div>
                </div>
                <Typography className={classNames(rankDiv, stat)} variant='body2'>
                  Rank: {stats.rank || 'N/A'}
                </Typography>
              </div>
            )
          })
        }
          </div>
        </div>
      </div>
      <CardReviewer />
    </div>
  )
}

User.propTypes = {
  classes:     object.isRequired,
  handleParam: string.isRequired,
  user:        object
}

export default withStyles(styles)(User)
