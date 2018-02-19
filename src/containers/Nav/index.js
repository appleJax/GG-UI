import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'UI/styles'
import { navHeight } from 'Styles/variables'
import syncActions from 'Actions/sync'
import Nav from './component'

const { openNavOptions, closeNavOptions } = syncActions


const styles = (theme) => ({
  appBar: {
    padding: '20px',
    width: '100%'
  },
  followButton: {
    margin: '0 0 -45px 15px'
  },
  logo: {
    fontFamily: 'Cabin Sketch',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  navContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'calc((100vw - 1230px) / 2)'
    }
  }
})

const mapStateToProps = (state) => ({
  navOptions: state.navOptions
})

const mapDispatchToProps = {
  openNavOptions,
  closeNavOptions
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(Nav)))
