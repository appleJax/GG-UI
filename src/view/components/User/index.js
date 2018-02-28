import React              from 'react'
import { object }         from 'prop-types'
import payloadStates      from 'Constants/PayloadStates'
import { withStyles }     from 'UI/styles'
import Avatar             from 'UI/Avatar'
import Button             from 'UI/Button'
import Typography         from 'UI/Typography'
import CardReviewer       from 'Components/CardReviewer'
import styles             from './styles'
import { formatAccuracy } from 'Utils'

const {
  INITIAL_STATE,
  FETCHING,
  NOT_FOUND,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

function User({
  classes: {
    avatarRoot,
    banner,
    followButton,
    followImage,
    label,
    statBox,
    timePeriod,
    userBar,
    userIdentity,
    userStats
  },
  handleParam,
  user
}) {

  if (user.state === NOT_FOUND)
    return <h2>User @{handleParam} not found...</h2>

  if (user.data.handle !== handleParam || user.state === FETCHING)
    return <h2>Loading...</h2>

  if (user.state === ERROR_FETCHING)
    return <h2>Error loading...</h2>

  const {
    allTimeStats,
    avatar,
    dailyStats,
    earnedCards,
    handle,
    monthlyStats,
    name,
    profileBanner,
    weeklyStats
  } = user.data

  return (
    <div>
      <header
        className={banner}
        style={{background: `url(${profileBanner})`}}
      ></header>
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
            <Button
              classes={{label}}
              color='secondary'
              className={followButton}
              href={`https://twitter.com/intent/follow?screen_name=${handle}`}
              target='_blank'
              size='small'
              variant='raised'
            >
              <img
                alt={`Follow @${handle}`}
                className={followImage}
                height='25'
                width='25'
                src='/images/twitter/Twitter_Logo_Blue.svg'
              />
              Follow
            </Button>
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
                <Typography variant='subheading'>Score: {stats.score}</Typography>
                <Typography variant='body1'>({formatAccuracy(stats)} correct)</Typography>
                <Typography variant='body2'>Rank: {stats.rank || 'N/A'}</Typography>
                { stats.average
                  ? <Typography variant='caption'>Average: {stats.average.value || stats.score}</Typography>
                  : <Typography variant='caption'>Daily Average: {dailyStats.average.value || stats.score}</Typography>
                }
              </div>
            )
          })
        }
        </div>
      </div>
      <CardReviewer
        cards={earnedCards}
        cardsState={user.earnedCardsState}
      />
    </div>
  )
}

User.propTypes = {
  classes: object.isRequired,
  user:    object
}

export default withStyles(styles)(User)
