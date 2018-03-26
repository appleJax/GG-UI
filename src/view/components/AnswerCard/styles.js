import { classes } from 'Styles/common'
const { imageDiv } = classes

export default (theme) => ({
  imageDiv,
  cardAnswer: {
    background: 'rgba(255,255,255,0.2)',
    color: 'rgba(0,0,0,0.5)',
    display: 'flex',
    flexWrap: 'wrap',
    padding: '5px',
    width: '100%'
  },
  cardHeader: {
    color: 'white',
    padding: '5px',
    textShadow: `1px 1px 3px rgba(0,0,0,0.3)`
  },
  cardLink: {
    margin: '10px 5px',
    textDecoration: 'none'
  },
  imgCard: {
    alignItems: 'center',
    background: 'rgb(90,125,139)',
    display: 'flex',
    flexDirection: 'column',
    width: '240px'
  },
  gameTitle: {
    background: 'rgba(0,0,0,0.2)',
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    width: '240px'
  },
  green: {
    background: 'rgb(47,176,110)'
  },
  red: {
    background: 'rgb(222,73,73)'
  }
})
