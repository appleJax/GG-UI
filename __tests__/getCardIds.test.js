import { getCardIds } from 'Utils'

const focusedUser = {
  cardView: {
    view: 'correct'
  },
  correct: {
    state: 'RESOLVED',
    data: [
      { cardId: '1', points: 24 },
      { cardId: '2', points: 12 },
      { cardId: '3', points: 4  }
    ]
  },
  incorrect: {
    state: 'RESOLVED',
    data: [
      '4',
      '5'
    ]
  },
  unanswered: {
    state: 'RESOLVED',
    data: [
      '6',
      '7',
      '8',
      '9'
    ]
  }
}

describe('getCardIds paginates focusedUser cards correctly', () => {

  test('single page', () => {
    const view = 'correct'
    const page = 1
    const itemsPerPage = 12
    const cardIds = getCardIds(focusedUser, view, page, itemsPerPage)

    expect(
      cardIds
    ).toEqual(['1', '2', '3'])
  })

})
