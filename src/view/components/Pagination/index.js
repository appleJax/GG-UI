import React              from 'react'
import { withStyles }     from 'UI/styles'
import MoreHoriz          from 'Icons/MoreHoriz'
import NavigateBefore     from 'Icons/NavigateBefore'
import NavigateNext       from 'Icons/NavigateNext'
import Typography         from 'UI/Typography'
import Button             from './Button'
import { func, number, object } from 'prop-types'

const styles = (theme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '5px'
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
  page
}) {

  if (numItems < 1)
    return null

  const numPages = Math.ceil(
    numItems / itemsPerPage
  )

  const more = <MoreHoriz className={moreEllipsis} />

  const previousPage = (
    <Button
      key={0}
      disabled={ page === 1 }
      onClick={() => {
        if (page !== 1) {
          setTimeout(resetScroll, 500)
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
      active={ page === num }
      onClick={() => {
        if (page !== num) {
          setTimeout(resetScroll, 500)
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
      disabled={ page === numPages }
      onClick={() => {
        if (page !== numPages) {
          setTimeout(resetScroll, 500)
          fetchData(page + 1)
        }
      }}
    >
      <NavigateNext />
    </Button>
  )

  let pageButtons = [ previousPage ]

  if (numPages <= 3) {
    for (let i = 1; i <= numPages; i++)
      pageButtons.push(numberedPage(i))

  } else if (page < 3) {
    pageButtons = pageButtons.concat([
      numberedPage(1),
      numberedPage(2),
      more,
      numberedPage(numPages)
    ])

  } else if (page >= numPages - 1) {
    pageButtons = pageButtons.concat([
      numberedPage(1),
      more,
      numberedPage(numPages - 1),
      numberedPage(numPages)
    ])

  } else {
    pageButtons = pageButtons.concat([
      numberedPage(1),
      more,
      numberedPage(page),
      more,
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

function resetScroll() {
  window.scrollTo(0, 580)
}

export default withStyles(styles)(Pagination)
