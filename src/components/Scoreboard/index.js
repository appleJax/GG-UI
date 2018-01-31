import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { fetchScoreboard } from 'Actions/async'
import { tryCatch } from 'Utils'
import styles from './index.sass'


export default class ScoreBoard extends Component {

  componentWillMount() {
    fetchScoreboard()
  }

  render() {
    const {
      match,
      history,
      users,
      search,
      setSearchQuery
    } = this.props

    const userScores = (users.length === 0)
      ? <tr><td>N/A</td><td>N/A</td></tr>
      : users.map(({userId, name, handle, avatar, score}) => (
        <tr
          className='score-board__row'
          key={userId}
          onClick={() => history.push(`/users/${userId}`)}
        >
            <td>
              <img src={avatar} alt={name} />
              <div className='handle'>{handle}</div>
            </td>
            <td className='score'>{score}</td>
        </tr>
      ))

    return (
      <div>
        <input
          className='scoreboard__searchbox'
          type='text'
          value={search}
          placeholder='@username'
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <table className='score-board'>
          <thead>
            <tr>
              <th>Player</th> <th>Score</th>
            </tr>
          </thead>
          <tbody>
          { userScores }
          </tbody>
        </table>
      </div>
    )
  }

}
