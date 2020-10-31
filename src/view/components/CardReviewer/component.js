import React                    from 'react'
import { func, object } from 'prop-types'
import payloadStates            from 'Constants/PayloadStates'
import SwipeableViews           from 'react-swipeable-views'
import Subheader                from 'UI/ListSubheader'
import Tabs                     from 'UI/Tabs'
import Tab                      from 'UI/Tab'
import Typography               from 'UI/Typography'
import CheckBox                 from 'Icons/CheckBox'
import IndeterminateCheckBox    from 'Icons/IndeterminateCheckBox'
import CheckBoxOutlineBlank     from 'Icons/CheckBoxOutlineBlank'
import AnswerCard               from 'Components/AnswerCard'
import EmptyMessage             from 'Components/EmptyMessage'
import Pagination               from 'Components/Pagination'
import Spinner                  from 'Components/Spinner'
import { CARDS_PER_PAGE }       from 'Utils'

const {
  INITIAL_STATE,
  FETCHING,
  NOT_FOUND,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

function CardReviewer({
  classes: {
    cardList,
    container,
    label,
    noWrap,
    reviewer,
    reviewerHandle,
    row,
    subHeader,
    tabs,
    title
  },
  auth,
  setCardView,
  fetchCards,
  fetchingCards,
  focusedUser,
  focusedUser: {
    stats: {
      data: {
        handle
      }
    },
    cardView,
    correct,
    incorrect,
    unanswered
  }
}) {
  const tabValue =
      (cardView.view === 'correct')   ? 0
    : (cardView.view === 'incorrect') ? 1
    :                                   2

  const cards = focusedUser[cardView.view].data
  const cardsState = focusedUser[cardView.view].state
  let cardDisplay
  if (cardsState === FETCHING || cardsState === INITIAL_STATE) {
    cardDisplay = <Spinner />
  } else if (cardsState === ERROR_FETCHING) {
    cardDisplay = <EmptyMessage error />
  } else if (cardsState === NOT_FOUND) {
    cardDisplay = <EmptyMessage message='N/A' />
  } else {
    cardDisplay = cards.map(
      (card, i) =>
        <AnswerCard key={i} card={card} status={cardView.view} />
    )
  }
  let totalCards = 0

  if (focusedUser.stats.state === RESOLVED) {
    totalCards = focusedUser.stats.data.allTimeStats[cardView.view].length
  }

  const scrollTop = (window.innerWidth < 600)
    ? 1300
    : 1120

  const pagination = (
    <Pagination
      itemsPerPage={CARDS_PER_PAGE}
      fetchData={(page) => {
        fetchingCards(cardView.view)
        fetchCards(page)
      }}
      numItems={totalCards}
      page={cardView.page}
      scrollTop={scrollTop}
    />
  )

  const SwipeableTab = () =>
    <div className={reviewer}>
      { pagination }
      <div className={cardList}>
        { cardDisplay }
      </div>
      { pagination }
      <div style={{flexGrow: 1000}} />
    </div>

  return (
    <div className={container}>
      <Subheader classes={{root: subHeader}} component='div'>
        <Typography className={title} variant='subheading'>
        <span className={reviewerHandle}>{ `@${handle}'s ` }</span>
        <span className={noWrap}>Flashcard Reviewer</span>
        </Typography>
        <Tabs
          classes={{root: tabs}}
          value={tabValue}
          onChange={(e, value) => setCardView(value)}
          indicatorColor='secondary'
          textColor='secondary'
          centered
          fullWidth
        >
          <Tab classes={{label}} label='Correct'    icon={<CheckBox />} />
          <Tab classes={{label}} label='Incorrect'  icon={<IndeterminateCheckBox />} />
          <Tab classes={{label}} label='Unanswered' icon={<CheckBoxOutlineBlank />} />
        </Tabs>
      </Subheader>
      <SwipeableViews
        containerStyle={{willChange: 'initial'}}
        axis='x'
        index={tabValue}
        onChangeIndex={value => setCardView(value)}
      >
        <SwipeableTab />
        <SwipeableTab />
        <SwipeableTab />
      </SwipeableViews>
    </div>
  )
}

CardReviewer.propTypes = {
  auth:        object.isRequired,
  classes:     object.isRequired,
  fetchCards:  func.isRequired,
  focusedUser: object.isRequired,
  setCardView: func.isRequired
}

export default CardReviewer
