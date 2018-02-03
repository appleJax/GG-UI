import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { array, func, object, string } from 'prop-types'
import { withStyles } from 'UI/styles'
import Avatar from 'UI/Avatar'
import AutoComplete from 'UI/AutoComplete'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'UI/Table'
import Paper from 'UI/Paper'
import styles from './styles'


function Scoreboard(props) {
  const {
    classes,
    history,
    match,
    search,
    setSearchQuery,
    users
  } = props

  const userScores = (users.length === 0)
    ? <TableRow><TableCell>Loading...</TableCell></TableRow>
    : users.map(({userId, name, handle, avatar, score}) => (
      <TableRow
        key={userId}
        onClick={() => history.push(`/stats/${handle}`)}
      >
        <TableCell>
          <Avatar src={avatar} alt={name} />
          <div>{handle}</div>
        </TableCell>
        <TableCell numeric>{score}</TableCell>
      </TableRow>
    ))

  return (
    <div>
      <AutoComplete
        floatingLabelText='Search @username'
        filter={AutoComplete.caseInsensitiveFilter}
        dataSource={users}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Player</TableCell>
              <TableCell numeric>Score</TableCell>
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
  match: object.isRequired,
  search: string.isRequired,
  setSearchQuery: func.isRequired,
  users: array.isRequired
}

export default withStyles(styles)(Scoreboard)
