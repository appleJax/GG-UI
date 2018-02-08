import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { array, func, number, object, string } from 'prop-types'
import { withStyles } from 'UI/styles'
import Avatar from 'UI/Avatar'
import Input, { InputAdornment } from 'UI/Input';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'UI/Table'
import Tabs, { Tab } from 'UI/Tabs'
import Typography from 'UI/Typography'
import Paper from 'UI/Paper'
import styles from './styles'


function Scoreboard(props) {
  const {
    classes: {
      container,
      hover,
      headerCell,
      nameCell,
      rankNumber,
      root,
      searchInput,
      smallNumber,
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
        allTimeStats,
        avatar,
        handle,
        monthlyStats,
        name,
        rank,
        userId,
        weeklyStats
      }) => {
        let displayScore = allTimeStats.score
        switch (scoreView) {
          case 0:
            displayScore = weeklyStats.score
            break
          case 1:
            displayScore = monthlyStats.score
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
            <TableCell classes={{typeBody: rankNumber}}>{rank}</TableCell>
            <TableCell classes={{root: nameCell}}>
              <div>
                <Avatar src={avatar} alt={name} />
                <Typography variant='subheading'>
                  @{handle}
                </Typography>
              </div>
            </TableCell>
            <TableCell numeric classes={{typeBody: smallNumber}}>{displayScore}</TableCell>
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
          centered
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
  scoreView: number.isRequired,
  setScoreView: func.isRequired,
  search: string.isRequired,
  setSearchQuery: func.isRequired,
  users: array.isRequired
}

export default withStyles(styles)(Scoreboard)
