import React          from 'react'
import { withStyles } from 'UI/styles'
import styles         from './styles'
import AnswerCard     from './component'

class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showAnswer: false
    }
  }

  toggleCard = () => this.setState({ showAnswer: !this.state.showAnswer })

  render() {
    return (
      <AnswerCard
        showAnswer={this.state.showAnswer}
        toggleCard={this.toggleCard}
        {...this.props}
      />
    )
  }
}

export default withStyles(styles)(Container)
