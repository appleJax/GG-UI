import React              from 'react'
import { withStyles }     from 'UI/styles'
import MoreHoriz          from 'Icons/MoreHoriz'
import NavigateBefore     from 'Icons/NavigateBefore'
import NavigateNext       from 'Icons/NavigateNext'
import Button             from './Button'
import { func, number, object } from 'prop-types'

const styles = (theme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    margin: '5px auto 0',
    maxWidth: '100vw'
  },
  moreEllipsis: {
    background: '#fff',
    color: '#aaa',
    height: '44px',
    padding: '0 2px',
    width: '25px'
  }
})

function Pagination({
  classes: {
    container,
    moreEllipsis
  },
  itemsPerPage,
  fetchData,
  numItems,
  page,
  scrollTop
}) {
  if (numItems < 1) {
    return null
  }

  const numPages = Math.ceil(
    numItems / itemsPerPage
  )

  const resetScroll = () => setTimeout(
    () =>
      window.scroll({
        top: scrollTop,
        left: 0,
        behavior: 'smooth'
      })
    , 500
  )

  const more = ({ key }) => <MoreHoriz key={key} className={moreEllipsis} />

  const previousPage = (
    <Button
      key={0}
      disabled={page === 1}
      onClick={() => {
        if (page !== 1) {
          resetScroll()
          fetchData(page - 1)
        }
      }}
    >
      <NavigateBefore />
    </Button>
  )

  const numberedPage = (num) => (
    <Button
      key={num}
      active={page === num}
      onClick={() => {
        if (page !== num) {
          resetScroll()
          fetchData(num)
        }
      }}
    >
      { num }
    </Button>
  )

  const nextPage = (
    <Button
      key={numPages + 1}
      disabled={page === numPages}
      onClick={() => {
        if (page !== numPages) {
          resetScroll()
          fetchData(page + 1)
        }
      }}
    >
      <NavigateNext />
    </Button>
  )

  let pageButtons = [ previousPage ]

  if (numPages <= 5) {
    for (let i = 1; i <= numPages; i++) {
      pageButtons.push(numberedPage(i))
    }
  } else if (page < 3) {
    pageButtons = pageButtons.concat([
      numberedPage(1),
      numberedPage(2),
      more({ key: numPages + 2 }),
      numberedPage(numPages)
    ])
  } else if (page >= numPages - 1) {
    pageButtons = pageButtons.concat([
      numberedPage(1),
      more({ key: numPages + 2 }),
      numberedPage(numPages - 1),
      numberedPage(numPages)
    ])
  } else {
    pageButtons = pageButtons.concat([
      numberedPage(1),
      more({ key: numPages + 2 }),
      numberedPage(page),
      more({ key: numPages + 3 }),
      numberedPage(numPages)
    ])
  }

  pageButtons.push(nextPage)

  return (
    <div className={container}>
      { pageButtons }
    </div>
  )
}

Pagination.propTypes = {
  classes:      object.isRequired,
  itemsPerPage: number.isRequired,
  fetchData:    func.isRequired,
  numItems:     number.isRequired,
  page:         number.isRequired
}

export default withStyles(styles)(Pagination)
