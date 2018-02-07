import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from 'UI/styles'
import Avatar from 'UI/Avatar'
import Typography from 'UI/Typography'
import CardReviewer from 'Components/CardReviewer'
import styles from './styles'

function User(props) {
  const {
    classes: {
      avatarRoot,
      banner,
      statBox,
      userBar,
      userIdentity,
      userStats
    },
    user
  } = props

  if (!user)
    return <h2>Loading...</h2>

  const {
    avatar,
    earnedCards,
    handle,
    monthlyScore,
    name,
    profileBanner,
    score,
    weeklyScore
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
            src={avatar}
          />
          <div className={userIdentity}>
            <Typography variant='title'>{name}</Typography>
            <Typography variant='subheading'>{`@${handle}`}</Typography>
          </div>
        </div>
        <div className={userStats}>
          <div className={statBox}>
            <Typography variant='subheading'>WEEKLY</Typography>
            <Typography variant='subheading'>{weeklyScore}</Typography>
          </div>
          <div className={statBox}>
            <Typography variant='subheading'>MONTHLY</Typography>
            <Typography variant='subheading'>{monthlyScore}</Typography>
          </div>
          <div className={statBox}>
            <Typography variant='subheading'>ALL TIME</Typography>
            <Typography variant='subheading'>{score}</Typography>
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
