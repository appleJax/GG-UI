import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { array, func, object, string } from 'prop-types'
import { withStyles } from 'UI/styles'
import Avatar from 'UI/Avatar'
import Input, { InputAdornment } from 'UI/Input';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'UI/Table'
import Tabs, { Tab } from 'UI/Tabs'
import Paper from 'UI/Paper'
import styles from './styles'


function Scoreboard(props) {
  const {
    classes: {
      cellPadding,
      container,
      hover,
      root,
      headerCell,
      nameCell,
      numberCell,
      searchInput,
      tabs
    },
    history,
    scoreView,
    search,
    setScoreView,
    setSearchQuery,
    users
  } = props

  const userScores = (users.length === 0)
    ? <TableRow><TableCell>Loading...</TableCell></TableRow>
    : users.map(({
        avatar,
        handle,
        monthlyScore,
        name,
        rank,
        score,
        userId,
        weeklyScore
      }) => {
        let displayScore = score
        switch (scoreView) {
          case 0:
            displayScore = weeklyScore
            break
          case 1:
            displayScore = monthlyScore
            break
          default:
            break
        }

        return (
          <TableRow
            key={userId}
            classes={{hover}}
            hover={true}
            onClick={() => history.push(`/stats/${handle}`)}
          >
            <TableCell classes={{typeBody: numberCell}}>{rank}</TableCell>
            <TableCell className={nameCell} classes={{paddingDefault: cellPadding}}>
              <Avatar src={avatar} alt={name} />
              <div>@{handle}</div>
            </TableCell>
            <TableCell numeric classes={{typeBody: numberCell}}>{displayScore}</TableCell>
          </TableRow>
        )
  })

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
        <Tabs
          classes={{root: tabs}}
          value={scoreView}
          onChange={(e, value) => setScoreView(value)}
          indicatorColor='secondary'
          textColor='secondary'
          fullWidth
        >
          <Tab label='WEEKLY' />
          <Tab label='MONTHLY' />
          <Tab label='ALL TIME' />
        </Tabs>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell classes={{root: headerCell}}>
                Rank
              </TableCell>
              <TableCell classes={{root: headerCell}}>
                Player
              </TableCell>
              <TableCell classes={{root: headerCell}}>
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
