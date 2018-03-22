import React                     from 'react'
import { Redirect }              from 'react-router-dom'
import classNames                from 'classnames'
import SwipeableViews            from 'react-swipeable-views'
import payloadStates             from 'Constants/PayloadStates'
import { withStyles }            from 'UI/styles'
import styles                    from './styles'
import Avatar                    from 'UI/Avatar'
import Input, { InputAdornment } from 'UI/Input';
import Tabs, { Tab }             from 'UI/Tabs'
import Typography                from 'UI/Typography'
import Paper                     from 'UI/Paper'
import SearchIcon                from 'Icons/Search'
import EmptyMessage              from 'Components/EmptyMessage'
import Pagination                from 'Components/Pagination'
import Spinner                   from 'Components/Spinner'

import {
  formatHMS,
  SCORES_PER_PAGE
} from 'Utils'

import {
  array,
  func,
  number,
  object,
  string
} from 'prop-types'

const {
  LOGGED_IN,
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
    headerRow,
    loggedInRow,
    nameCell,
    playerColumn,
    playerHeader,
    rankColumn,
    rankNumber,
    root,
    scoreColumn,
    searchInput,
    smallNumber,
    stripe,
    table,
    tableBody,
    tableCell,
    tableRow,
    tabs
  },
  auth,
  setScoreView,
  fetchQuery,
  fetchStats,
  history,
  scoreView,
  search,
  setFocusedUser,
  users
}) {

  const tabValue =
      (scoreView === 'weeklyStats' ) ? 0
    : (scoreView === 'monthlyStats') ? 1
    :                                       2

  const usersState = users.state
  let userScores
  if (usersState === NOT_FOUND && search.length > 0)
    userScores = (
      <EmptyMessage message='Not Found' />
    )
  else if (usersState === NOT_FOUND)
    userScores = (
      <EmptyMessage message='No Leaders. Be the First!' />
    )
  else if (usersState === FETCHING || usersState === INITIAL_STATE)
    userScores = (
      <div>
        <Spinner />
      </div>
    )
  else if (usersState === ERROR_FETCHING)
    userScores = (
      <div style={{padding: 'none'}}>
        <EmptyMessage error={true} />
      </div>
    )

  else if (usersState === RESOLVED)
    userScores =  users.data[users.page].map((user, i) => {
      const {
        avatar,
        handle,
        name,
        userId
      } = user

      return (
        <div
          key={userId}
          className={classNames(
            hover,
            tableRow,
            { [loggedInRow]: auth.state === LOGGED_IN &&
                             userId === auth.data.userId,
              [stripe]: i % 2 === 1
            }
          )}
          onClick={() => {
            setFocusedUser(user)
            history.push(`/stats/${handle}`)
          }}
        >
          <div className={classNames(rankColumn, rankNumber, tableCell)}>
            {user[scoreView].rank}
          </div>
          <div className={classNames(nameCell, playerColumn, tableCell)}>
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
          </div>
          <div className={classNames(scoreColumn, smallNumber, tableCell)}>
            {user[scoreView].score}
            <Typography variant='caption'>
              Average Time:
            </Typography>
            <Typography variant='caption'>
              { formatHMS(user[scoreView].avgTimeToAnswer) }
            </Typography>
          </div>
        </div>
      )
    })

  const pagination = (
    <div style={{height: '50px'}}>
      <Pagination
        itemsPerPage={SCORES_PER_PAGE}
        fetchData={fetchStats}
        numItems={users.total || 0}
        page={users.page || 1}
      />
    </div>
  )

  const showPagination = users.total > SCORES_PER_PAGE

  const SwipeableTab = () =>
    <div className={tableBody}>
      { showPagination && pagination }
      { userScores }
      { pagination }
    </div>

  return (
    <div className={container}>
      <Input
        type='text'
        placeholder='@username'
        value={search}
        classes={{root: searchInput}}
        onChange={(e) => fetchQuery(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon color='disabled' />
          </InputAdornment>
        }
      />
      <Paper className={root}>
        <Tabs
          classes={{root: tabs}}
          value={tabValue}
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
        <div className={table}>
          <div className={headerRow}>
            <div className={classNames(rankColumn, headerCell)}>
              <Typography color='secondary' variant='title'>
                Rank
              </Typography>
            </div>
            <div className={classNames(playerColumn, headerCell, playerHeader)}>
              <Typography color='secondary' variant='title'>
                Player
              </Typography>
            </div>
            <div className={classNames(scoreColumn, headerCell)}>
              <Typography color='secondary' variant='title'>
                Score
              </Typography>
            </div>
          </div>
          <SwipeableViews
            axis='x'
            index={tabValue}
            onChangeIndex={value => setScoreView(value)}
          >
            <SwipeableTab />
            <SwipeableTab />
            <SwipeableTab />
          </SwipeableViews>
        </div>
      </Paper>
    </div>
  )
}

Scoreboard.propTypes = {
  classes:      object.isRequired,
  history:      object.isRequired,
  scoreView:    string.isRequired,
  setScoreView: func.isRequired,
  search:       string.isRequired,
  fetchQuery:   func.isRequired,
  users:        object
}

export default withStyles(styles)(Scoreboard)
