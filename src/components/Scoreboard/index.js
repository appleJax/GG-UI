import React from 'react'
import { Redirect } from 'react-router-dom'
import { array, func, number, object, string } from 'prop-types'
import payloadStates from 'Constants/PayloadStates'
import { withStyles } from 'UI/styles'
import styles from './styles'
import Avatar from 'UI/Avatar'
import Input, { InputAdornment } from 'UI/Input';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'UI/Table'
import Tabs, { Tab } from 'UI/Tabs'
import Typography from 'UI/Typography'
import Paper from 'UI/Paper'
import SearchIcon from 'Icons/Search'

const {
  FETCHING,
  INITIAL_STATE,
  NOT_FOUND,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

function Scoreboard({
  classes: {
    avatarRoot,
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
  changeScoreView,
  fetchQuery,
  history,
  scoreView,
  search,
  setFocusedUser,
  users
}) {

  const tabValue =
      (scoreView === 'weeklyStats' ) ? 0
    : (scoreView === 'monthlyStats') ? 1
    :                                  2

  const usersState = users.state
  let userScores
  if (usersState === NOT_FOUND)
    userScores = <TableRow><TableCell>Not Found...</TableCell></TableRow>
  else if (usersState === FETCHING || usersState === INITIAL_STATE)
    userScores = <TableRow><TableCell>Loading...</TableCell></TableRow>
  else if (usersState === ERROR_FETCHING)
    userScores = <TableRow><TableCell>Error loading...</TableCell></TableRow>
  else if (usersState === RESOLVED)
    userScores =  users.data.map(user => {
      const {
        avatar,
        handle,
        name,
        userId
      } = user

      return (
        <TableRow
          key={userId}
          classes={{hover}}
          hover={true}
          onClick={() => {
            setFocusedUser(user)
            history.push(`/stats/${handle}`)
          }}
        >
          <TableCell classes={{typeBody: rankNumber}}>
            {user[scoreView].rank}
          </TableCell>
          <TableCell classes={{root: nameCell}}>
            <div>
              <Avatar
                alt={name}
                classes={{root: avatarRoot}}
                src={avatar}
              />
              <Typography variant='subheading'>
                @{handle}
              </Typography>
            </div>
          </TableCell>
          <TableCell numeric classes={{typeBody: smallNumber}}>
            {user[scoreView].score}
          </TableCell>
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
        onChange={(e) => fetchQuery(e.target.value)}
        startAdornment={<InputAdornment position="start"
      >
        <SearchIcon color='disabled' />
      </InputAdornment>}
      />
      <Paper className={root}>
        <Tabs
          classes={{root: tabs}}
          value={tabValue}
          onChange={(e, value) => changeScoreView(value)}
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
  classes:         object.isRequired,
  history:         object.isRequired,
  scoreView:       string.isRequired,
  changeScoreView: func.isRequired,
  search:          string.isRequired,
  fetchQuery:      func.isRequired,
  users:           object
}

export default withStyles(styles)(Scoreboard)
