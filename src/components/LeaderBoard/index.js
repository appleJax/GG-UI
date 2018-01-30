import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { fetchLeaderBoard } from 'Ajax'
import Img from 'Images/mzm.png'
import Styles from './index.sass'

// LeaderBoard
export default ({ match }) => {
  //const users = fetchLeaderBoard(match.params.board)

  const users = [{
    userId: 9292000,
    handle: '@testUser',
    avatar: Img,
    score: 34
  }]

  return  users
  ? (
    <table className='score-board'>
      <thead>
        <tr>
          <th>Player</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
      {users.map(({userId, name, handle, avatar, score}) => (
        <tr
          className='score-board__row'
          key={userId}
          onClick={() => window.location = `/users/${userId}`}
        >
            <td>
              <img src={avatar} alt={name} />
              <div className='handle'>{handle}</div>
            </td>
            <td className='score'>{score}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
  : <Redirect to='/not-found' />

}
