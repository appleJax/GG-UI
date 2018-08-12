import actionTypes from 'Constants/ActionTypes'

const {
  FETCHING_DL_LAST_UPDATED,
  SET_DL_LAST_UPDATED,
  ERROR_FETCHING_DL_LAST_UPDATED
} = actionTypes

export default ({
  fetchingDownloadLastUpdated: () => ({
    type: FETCHING_DL_LAST_UPDATED
  }),

  setDownloadLastUpdated: (downloadLastUpdated) => ({
    type: SET_DL_LAST_UPDATED,
    downloadLastUpdated
  }),

  errorFetchingDownloadLastUpdated: (error) => ({
    type: ERROR_FETCHING_DL_LAST_UPDATED,
    error
  })
})