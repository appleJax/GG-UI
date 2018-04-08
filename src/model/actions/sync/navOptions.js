import actionTypes from 'Constants/ActionTypes'

const {
  OPEN_NAV_OPTIONS,
  CLOSE_NAV_OPTIONS,
} = actionTypes


export default ({

  openNavOptions: () => ({
    type: OPEN_NAV_OPTIONS
  }),

  closeNavOptions: () => ({
    type: CLOSE_NAV_OPTIONS
  })

})
