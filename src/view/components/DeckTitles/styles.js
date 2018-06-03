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
  spacer: {
    flexGrow: 1000
  }
})
