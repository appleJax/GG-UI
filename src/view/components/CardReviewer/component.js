import React                    from 'react'
import { func, object, string } from 'prop-types'
import classNames               from 'classnames'
import payloadStates            from 'Constants/PayloadStates'
import SwipeableViews           from 'react-swipeable-views'
import Paper                    from 'UI/Paper'
import Subheader                from 'UI/List/ListSubheader'
import Tabs, { Tab }            from 'UI/Tabs'
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
    reviewer,
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
    cardView,
    correct,
    incorrect,
    unanswered
  }
}) {

  const tabValue =
      (cardView.view === 'correct' )  ? 0
    : (cardView.view === 'incorrect') ? 1
    :                              2

  const cards = focusedUser[cardView.view].data
  const cardsState = focusedUser[cardView.view].state
  let cardDisplay
  if (cardsState === FETCHING || cardsState === INITIAL_STATE) {
    cardDisplay = <Spinner />
  } else if (cardsState === ERROR_FETCHING) {
    cardDisplay = <EmptyMessage error={true} />
  } else if (cardsState === NOT_FOUND) {
    cardDisplay = <EmptyMessage message='N/A' />
  } else {
    cardDisplay = cards.map(
      (card, i) =>
        <AnswerCard key={i} card={card} status={cardView.view} />
    )
  }
  let totalCards = 0

  if (focusedUser.stats.state === RESOLVED)
    totalCards = focusedUser.stats.data.allTimeStats[cardView.view].length

  const scrollTop = (window.innerWidth < 600)
    ? 760
    : 580


  const SwipeableTab = () =>
    <div className={reviewer}>
      <div className={cardList}>
        { cardDisplay }
      </div>
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
      <div style={{flexGrow: 1000}} />
    </div>

  return (
    <div className={container}>
      <Subheader classes={{root: subHeader}} component='div'>
        <Typography className={title} variant='subheading'>
          Flashcard Reviewer
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
