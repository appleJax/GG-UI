import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from 'UI/styles'
import Avatar from 'UI/Avatar'
import Button from 'UI/Button'
import Typography from 'UI/Typography'
import CardReviewer from 'Components/CardReviewer'
import styles from './styles'
import { formatAccuracy } from 'Utils'

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
  fetchEarnedCards,
  user
}) {

  if (!user)
    return <h2>User @{handleParam} not found...</h2>

  if (user.handle !== handleParam)
    return <h2>Loading...</h2>

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
  } = user

  if (!earnedCards) {
    const ids = allTimeStats.correct.map(card => card.cardId)
    fetchEarnedCards(ids)
  }

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
                src='/images/Twitter_Logo_Blue.svg'
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
                <Typography variant='body2'>Rank: {stats.rank}</Typography>
                { stats.average
                  ? <Typography variant='caption'>Average Score: {stats.average.value}</Typography>
                  : <Typography variant='caption'>Daily Average: {dailyStats.average.value}</Typography>
                }
              </div>
            )
          })
        }
        </div>
      </div>
      <CardReviewer cards={earnedCards} />
    </div>
  )
}

User.propTypes = {
  classes: object.isRequired,
  user: object
}

export default withStyles(styles)(User)
