import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from 'UI/styles'
import Avatar from 'UI/Avatar'
import Typography from 'UI/Typography'
import CardReviewer from 'Components/CardReviewer'
import styles from './styles'
import { formatAccuracy } from 'Utils'

function User({
  classes: {
    avatarRoot,
    banner,
    statBox,
    timePeriod,
    userBar,
    userIdentity,
    userStats
  },
  user
}) {

  if (!user)
    return <h2>Loading...</h2>

  const {
    allTimeStats,
    avatar,
    earnedCards,
    handle,
    monthlyStats,
    name,
    profileBanner,
    weeklyStats
  } = user

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
          </div>
        </div>
        <div className={userStats}>
          <div className={statBox}>
            <Typography className={timePeriod} variant='subheading'>WEEKLY</Typography>
            <Typography variant='subheading'>Score: {weeklyStats.score}</Typography>
            <Typography variant='body1'>({formatAccuracy(weeklyStats)} correct)</Typography>
          </div>
          <div className={statBox}>
            <Typography className={timePeriod} variant='subheading'>MONTHLY</Typography>
            <Typography variant='subheading'>Score: {monthlyStats.score}</Typography>
            <Typography variant='body1'>({formatAccuracy(monthlyStats)} correct)</Typography>
          </div>
          <div className={statBox}>
            <Typography className={timePeriod} variant='subheading'>ALL TIME</Typography>
            <Typography variant='subheading'>Score: {allTimeStats.score}</Typography>
            <Typography variant='body1'>({formatAccuracy(allTimeStats)} correct)</Typography>
          </div>
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
