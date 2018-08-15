import React, { Component } from 'react'
import connect         from 'react-redux/es/connect/connect'
import classNames      from 'classnames'
import { withStyles }  from 'UI/styles'
import ButtonBase      from 'UI/ButtonBase'
import Typography      from 'UI/Typography'
import SmallSpinner    from 'Components/SmallSpinner'
import CloudDownload   from 'Icons/CloudDownload'
import asyncActions    from 'Actions/async'
import payloadStates   from 'Constants/PayloadStates'
import {
  DECK_DOWNLOAD_URL,
  formatDate,
  logDownload
} from 'Utils'

const { fetchDownloadLastUpdated } = asyncActions

const {
  ERROR_FETCHING,
  RESOLVED
} = payloadStates

const styles = (theme) => ({
  column: {
    flexDirection: 'column'
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  downloadButton: {
    background: theme.palette.primary.main,
    borderRadius: '5px',
    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
    color: 'white',
    fontSize: '16px',
    padding: '10px 15px',
    textShadow: '1px 1px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      background: theme.palette.primary.light,
      textShadow: '1px 1px rgba(0, 0, 0, 0.3)'
    }
  },
  downloadIcon: {
    marginRight: '8px'
  },
  link: {
    marginTop: '20px',
    textDecoration: 'none'
  },
  timestamp: {
    color: '#333',
    background: '#eee',
    borderRadius: '5px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2) inset',
    fontSize: '12px',
    marginTop: '5px',
    padding: '8px 12px'
  }
})

const mapStateToProps = ({ downloadLastUpdated }) => ({
  downloadLastUpdated
})

const mapDispatchToProps = {
  fetchDownloadLastUpdated
}

class DownloadDeck extends Component {
  componentDidMount() {
    this.props.fetchDownloadLastUpdated()
  }

  render() {
    const {
      classes: {
        column,
        container,
        downloadButton,
        downloadIcon,
        link,
        timestamp
      },
      downloadLastUpdated
    } = this.props

    let updatedContent

    switch (downloadLastUpdated.state) {
      case ERROR_FETCHING:
        updatedContent = 'N/A'
        break

      case RESOLVED:
        updatedContent = formatDate(
          downloadLastUpdated.data
        )
        break

      default:
        updatedContent = <SmallSpinner style={{ marginLeft: '10px' }} />
        break

    }
    // href={DECK_DOWNLOAD_URL}

    return (
      <div className={classNames(container, column)}>
        <a
          className={link}
          rel='noopener'
          onClick={() => {
            logDownload()
            location.href = DECK_DOWNLOAD_URL
          }}
        >
          <ButtonBase className={classNames(container, downloadButton)}>
            <CloudDownload className={downloadIcon} />
            <span>
            Download Gamegogakuen <span style={{whiteSpace: 'nowrap'}}>Anki Deck</span>
            </span>
          </ButtonBase>
        </a>
        <Typography variant='caption' className={classNames(container, timestamp)}>
          Last Updated: {updatedContent}
        </Typography>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DownloadDeck))
