import Img from 'Images/mzm.png'

export default {

  fetchLeaderBoard(board) {
    return [{
      userId: 9292000,
      handle: '@testUser',
      avatar: Img,
      score: 34
    }]
    //todo
    //fetch(board).then(users => users)
  }

}
