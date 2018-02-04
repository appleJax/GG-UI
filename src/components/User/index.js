import React, { Component } from 'react'
import { object } from 'prop-types'
import { withStyles } from 'UI/styles'
import styles from './styles'

function User(props) {
  const {
    name,
    handle,
    avatar,
    profileBanner,
    score,
    correctAnswers
  } = props.user || {}

  return !props.user
  ? <h2>Loading...</h2>
  : (
    <div>
      <header
        style={{background: `url(${profileBanner})`}}
        className='user__header'
      >
        <img src={avatar} alt='user avatar' />
        { `${name} - ${handle}` }
      </header>
    </div>
  )
}

User.propTypes = {
  user: object
}

export default withStyles(styles)(User)
