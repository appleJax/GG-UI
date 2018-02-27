import actionTypes from 'Constants/ActionTypes'

const {
  OPEN_NAV_OPTIONS,
  CLOSE_NAV_OPTIONS,
} = actionTypes


export default ({

  openNavOptions: (anchorElement) => ({
    type: OPEN_NAV_OPTIONS,
    anchorElement
  }),

  closeNavOptions: () => ({
    type: CLOSE_NAV_OPTIONS
  })

})
