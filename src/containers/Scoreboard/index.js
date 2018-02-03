import React, { Component }  from 'react'
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

class Container extends Component {
  componentWillMount() {
    this.props.fetchScoreboard()
  }

  render() {
    const { fetchScoreboard, ...props } = this.props
    return <Scoreboard {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
