import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { array, func, object, string } from 'prop-types'
import { withStyles } from 'UI/styles'
import Avatar from 'UI/Avatar'
import Input, { InputAdornment } from 'UI/Input';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'UI/Table'
import Paper from 'UI/Paper'
import styles from './styles'


function Scoreboard(props) {
  const {
    classes: {
      cellPadding,
      center,
      container,
      hover,
      root,
      headerCell,
      searchInput
    },
    history,
    search,
    setSearchQuery,
    users
  } = props

  const userScores = (users.length === 0)
    ? <TableRow><TableCell>Loading...</TableCell></TableRow>
    : users.map(({userId, name, handle, avatar, score}, index) => (
      <TableRow
        key={userId}
        classes={{hover}}
        hover={true}
        onClick={() => history.push(`/stats/${handle}`)}
      >
        <TableCell numeric className={center}>{index + 1}</TableCell>
        <TableCell classes={{paddingDefault: cellPadding}}>
          <Avatar src={avatar} alt={name} />
          <div>@{handle}</div>
        </TableCell>
        <TableCell numeric className={center}>{score}</TableCell>
      </TableRow>
    ))

  return (
    <div className={container}>
      <Input
        type='text'
        placeholder='@username'
        value={search}
        classes={{root: searchInput}}
        onChange={(e) => setSearchQuery(e.target.value)}
        startAdornment={<InputAdornment position="start">🔎</InputAdornment>}
      />
      <Paper className={root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                numeric
                classes={{root: headerCell}}
                className={center}
              >
                Rank
              </TableCell>
              <TableCell classes={{root: headerCell}}>
                Player
              </TableCell>
              <TableCell
                numeric
                classes={{root: headerCell}}
                className={center}
              >
                Score
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { userScores }
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}

Scoreboard.propTypes = {
  classes: object.isRequired,
  history: object.isRequired,
  search: string.isRequired,
  setSearchQuery: func.isRequired,
  users: array.isRequired
}

export default withStyles(styles)(Scoreboard)
