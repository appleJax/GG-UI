import { ajax } from 'Utils'
import syncActions from 'Actions/sync'

const { 
  fetchingDownloadLastUpdated,
  setDownloadLastUpdated,
  errorFetchingDownloadLastUpdated
} = syncActions

export default ({
  fetchDownloadLastUpdated: () =>
    dispatch => {
      dispatch(fetchingDownloadLastUpdated())

      ajax.get('/downloadLastUpdated')
        .then(downloadLastUpdated => dispatch(
          setDownloadLastUpdated(downloadLastUpdated)
        ))
        .catch(error => dispatch(
          errorFetchingDownloadLastUpdated(error)
        ))
    }
})
