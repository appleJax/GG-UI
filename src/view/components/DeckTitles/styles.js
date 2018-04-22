import { classes, navHeight } from 'Styles/common'
const { cardList } = classes

export default (theme) => ({
  anki: {
    alignItems: 'flex-end',
    background: '#ddd',
    display: 'flex',
    flexShrink: '0',
    marginTop: '15px',
    padding: '10px'
  },
  ankiImg: {
    marginBottom: '-5px'
  },
  ankiInfo: {
    color: 'rgba(0,0,0,0.5)'
  },
  cardList,
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: `calc(100vh - ${navHeight})`
  },
  header: {
    alignItems: 'center',
    background: 'rgba(63,81,181,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: '15px',
    padding: '20px 0 10px'
  },
  pageTitle: {
    color: '#3F51B5',
    textShadow: '1px 1px white'
  },
  spacer: {
    flexGrow: 1000
  }
})
