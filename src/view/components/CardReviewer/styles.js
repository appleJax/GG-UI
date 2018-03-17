import { classes } from 'Styles/common'
const { cardList } = classes

export default (theme) => ({
  cardList,
  cardAnswer: {
    background: 'rgba(255,255,255,0.2)',
    color: theme.palette.primary.dark,
    marginTop: '-5px',
    padding: '5px'
  },
  cardHeader: {
    color: 'white',
    padding: '5px',
    textShadow: `1px 1px 3px ${theme.palette.primary.dark}`
  },
  container: {
    width: '100%'
  },
  imgCard: {
    background: theme.palette.primary.light,
    marginBottom: '20px',
    width: '240px'
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
  label: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  title: {
    background: theme.palette.primary.main,
    color: '#fff',
    padding: '5px',
    paddingLeft: '30px'
  }
})
