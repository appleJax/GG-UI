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
    avatarRoot,
    avgTimeDiv,
    banner,
    rankDiv,
    scoreDiv,
    statBox,
    stat,
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
            <Typography variant='title'>{name}</Typography>
            <Typography variant='subheading'>{`@${handle}`}</Typography>
            <FollowButton handle={handle} userId={userId} />
          </div>
        </div>
        <div className={userStats}>
        {
          [weeklyStats, monthlyStats, allTimeStats].map((stats, i) => {
            let label = 'ALL TIME'
            if (i === 0) label = 'WEEKLY'
            if (i === 1) label = 'MONTHLY'
            return (
              <div key={i} className={statBox}>
                <Typography className={timePeriod} variant='subheading'>{label}</Typography>
                <div className={classNames(scoreDiv, stat)}>
                  <Typography variant='subheading'>Score: {stats.score}</Typography>
                  { stats.average
                    ? <Typography variant='caption'>Average: {stats.average.value || stats.score}</Typography>
                    : <Typography variant='caption'>Daily Average: {dailyStats.average.value || stats.score}</Typography>
                  }
                </div>
                <div className={classNames(answeredRatioDiv, stat)}>
                  <Typography variant='body1'>{formatRatio(stats)}</Typography>
                  <Typography variant='caption'>ANSWERED</Typography>
                </div>
                <div className={classNames(totalRatioDiv, stat)}>
                  <Typography variant='body1'>{formatRatio(stats, true)}</Typography>
                  <Typography variant='caption'>TOTAL</Typography>
                </div>
                <div className={classNames(avgTimeDiv, stat)}>
                  <Typography variant='caption'>Average</Typography>
                  <Typography variant='caption'>Answer Time:</Typography>
                  <Typography variant='caption'>{formatHMS(stats.avgTimeToAnswer)}</Typography>
                </div>
                <Typography className={classNames(rankDiv, stat)} variant='body2'>Rank: {stats.rank || 'N/A'}</Typography>
              </div>
            )
          })
        }
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
