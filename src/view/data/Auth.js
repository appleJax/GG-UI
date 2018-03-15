import React         from 'react'
import { connect }   from 'react-redux'
import asyncActions  from 'Actions/async'
import syncActions   from 'Actions/sync'
import payloadStates from 'Constants/PayloadStates'

const { LOGGED_IN } = payloadStates
const [{
  fetchCurrentUser,
  requestLogout,
  updateUserDetails
}, {
  authTransition
}] = [ asyncActions, syncActions ]

const mapStateToProps = ({
  auth
}) => ({
  auth
})

const mapDispatchToProps = {
  authTransition,
  fetchCurrentUser,
  requestLogout,
  updateUserDetails
}

function Auth(allProps) {
  const {
    renderLoggedIn,
    renderLoggedOut,
    ...props
  } = allProps

  return (allProps.auth.state === LOGGED_IN)
    ? renderLoggedIn(props)
    : renderLoggedOut(props)

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)
