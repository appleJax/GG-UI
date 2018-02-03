import React, { Component } from 'react'
import { object } from 'prop-types'
import styles from './styles'

class User extends Component {

  componentWillMount() {
    if (!this.props.user) {
      this.props.fetchScore(this.props.handle)
    }
  }

  render() {
    const {
      name,
      handle,
      avatar,
      profileBanner,
      score,
      correctAnswers
    } = this.props.user || {}

    return !this.props.user
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

}

User.propTypes = {
  user: object
}

export default User
