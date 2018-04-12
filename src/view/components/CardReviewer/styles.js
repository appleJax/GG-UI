import { classes } from 'Styles/common'
const { cardList } = classes

export default (theme) => ({
  cardList,
  container: {
    width: '100%'
  },
  label: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  reviewer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'calc(100vh - 106px)',
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  subHeader: {
    opacity: '1',
    marginBottom: '10px',
    padding: '0',
    width: '100%'
  },
  tabs: {
    background: theme.palette.primary.light,
    boxShadow: '0 2px 2px rgba(0,0,0,0.3)',
    fontSize: '20px'
  },
  title: {
    background: theme.palette.primary.main,
    color: '#fff',
    padding: '5px',
    paddingLeft: '30px'
  }
})
