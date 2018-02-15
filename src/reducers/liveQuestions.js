import { POPULATE_LIVE_QUESTIONS } from 'Actions/sync'

export default (state = [], action) => {
    switch (action.type) {
      case POPULATE_LIVE_QUESTIONS:
        return action.liveQuestions

      default:
        return state
    }
  }
