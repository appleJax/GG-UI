import React, { Component }  from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'UI/styles'
import { fetchLiveQuestions } from 'Actions/async'
import LiveQuestions from './component'

const styles = (theme) => ({
  captionText: {
    margin: '5px'
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  imageDiv: {
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column'
    }
  },
  liveTitle: {
    marginTop: '15px',
    textShadow: '0 3px 15px rgba(0,0,0,0.5)'
  },
  questionCard: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 0'
  }
})

const mapStateToProps = (state) => ({
  liveQuestions: state.liveQuestions
})

const mapDispatchToProps = {
  fetchLiveQuestions
}

class Container extends Component {
  componentWillMount() {
    if (this.props.liveQuestions.length === 0)
      this.props.fetchLiveQuestions()
  }

  render() {
    const {
      fetchLiveQuestions,
      ...props
    } = this.props

    return <LiveQuestions {...props} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Container))
