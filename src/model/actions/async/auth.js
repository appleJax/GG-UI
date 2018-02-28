import { ajax }    from 'Utils'
import syncActions from 'Actions/sync'

const { loginSuccess, loginError } = syncActions


export default ({

  login: () =>
    dispatch =>
      ajax.get('/login')
          .then(user =>
            dispatch(loginSuccess(user))
          )
          .catch(error =>
            dispatch(loginError())
          )

  // ?????
  // login: (handle) =>
  //   dispatch => {
  //     dispatch(fetchingFocusedUser())
  //     const params = {
  //       params: { handle }
  //     }
  //     ajax.get('/userStats', params)
  //         .then(user =>
  //           dispatch(setFocusedUser(user))
  //         ).catch(error =>
  //           dispatch(errorFetchingFocusedUser())
  //         )
  //   }

})
