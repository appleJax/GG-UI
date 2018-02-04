import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { fetchScoreboard } from 'Actions/async'
import { setSearchQuery } from 'Actions/sync'
import Scoreboard from 'Components/Scoreboard'
import User from 'Components/User'

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
    const {
      fetchScoreboard,
      match: { params: { handle } },
      ...props
    } = this.props

    let user
    if (handle)
      user = props.users.find(userObj => userObj.handle === handle)


    return (handle)
      ? <User user={user} {...props} />
      : <Scoreboard {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)
