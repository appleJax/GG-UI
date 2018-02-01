import { connect } from 'react-redux'
import { fetchScoreboard } from 'Actions/async'
import { setSearchQuery } from 'Actions/sync'
import Scoreboard from './component'

const mapStateToProps = (state) => ({
  users: state.users,
  search: state.search
})

const mapDispatchToProps = {
  fetchScoreboard,
  setSearchQuery
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Scoreboard)
