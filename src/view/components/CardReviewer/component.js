import React                    from 'react'
import { func, object, string } from 'prop-types'
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
import Spinner                  from 'Components/Spinner'

const {
  INITIAL_STATE,
  FETCHING,
  NOT_FOUND,
  RESOLVED,
  ERROR_FETCHING
} = payloadStates

function CardReviewer({
  auth,
  setCardView,
  focusedUser,
  focusedUser: {
    cardView,
    correct,
    incorrect,
    unanswered
  },
  classes: {
    cardList,
    container,
    label,
    row,
    subHeader,
    tabs,
    title
  }
}) {

  const tabValue =
      (cardView === 'correct' )  ? 0
    : (cardView === 'incorrect') ? 1
    :                              2

  const cardsState = focusedUser[cardView].state
  let cardDisplay
  if (cardsState === FETCHING || cardsState === INITIAL_STATE) {
    cardDisplay = <Spinner />
  } else if (cardsState === ERROR_FETCHING) {
    cardDisplay = <EmptyMessage error={true} />
  } else if (cardsState === NOT_FOUND) {
    cardDisplay = <EmptyMessage message='N/A' />
  } else {
    cardDisplay = focusedUser[cardView].data.map(
      (card, i) =>
        <AnswerCard key={i} card={card} status={cardView} />
      )
  }
  const SwipeableTab = () =>
    <div className={cardList}>
      { cardDisplay }
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
        <Tab classes={{label}} label='Correct' icon={<CheckBox />} />
        <Tab classes={{label}} label='Incorrect' icon={<IndeterminateCheckBox />} />
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
  focusedUser: object.isRequired,
  setCardView: func.isRequired
}

export default CardReviewer
