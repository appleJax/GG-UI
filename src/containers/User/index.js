import { connect } from 'react-redux'
import { fetchScore } from 'Actions/async'
import User from './component'

const mapStateToProps = (state, { match: { params: { handle } } }) => {
  if (state.user && state.user.handle === handle)
    return { user: state.user }

  const user = state.users.find(user => user.handle === handle)
  if (user) return { user }

  return { handle }
}

const mapDispatchToProps = {
  fetchScore
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
