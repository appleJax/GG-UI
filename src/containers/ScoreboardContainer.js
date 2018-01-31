import { connect } from 'react-redux'
import { setSearchQuery } from 'Actions/sync'
import Scoreboard from 'Components/Scoreboard'


const mapStateToProps = (state) => ({
  users: state.users,
  search: state.search
})

const mapDispatchToProps = {
  setSearchQuery
}

export default ScoreboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Scoreboard)
