import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { fetchLeaderBoard } from '../ajax'
import Img from 'Images/mzm.png'

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
    <table>
      <thead>
        <th>Player</th>
        <th>Score</th>
      </thead>
      <tbody>
        {users.map(({userId, name, handle, avatar, score}) => (
          <tr>
            <Link to={`/users/${userId}`}>
              <td>
                <img src={avatar} alt={name} />
                <div className='handle'>{handle}</div>
              </td>
              <td className='score'>{score}</td>
            </Link>
          </tr>
        ))}
      </tbody>
    </table>
  )
  : <Redirect to='/not-found' />

}
