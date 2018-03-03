export default ({
  _json: {
    id_str: userId,
    name,
    screen_name: handle,
    profile_image_url_https: avatar,
    profile_banner_url: profileBanner
  }
}) => ({
  userId,
  name,
  handle,
  avatar,
  profileBanner,
  allTimeStats: {
    attempts: 0,
    correct: [],
    incorrect: [],
    totalPossible: 0,
    rank: 0,
    score: 0,
    avgTimeToAnswer: 0
  },
  monthlyStats: {
    attempts: 0,
    correct: 0,
    totalPossible: 0,
    rank: 0,
    score: 0,
    avgTimeToAnswer: 0,
    average: {
      n: 0,
      value: 0
    }
  },
  weeklyStats: {
    attempts: 0,
    correct: 0,
    totalPossible: 0,
    rank: 0,
    score: 0,
    avgTimeToAnswer: 0,
    average: {
      n: 0,
      value: 0
    }
  },
  dailyStats: {
    attempts: 0,
    correct: 0,
    totalPossible: 0,
    score: 0,
    avgTimeToAnswer: 0,
    average: {
      n: 0,
      value: 0
    }
  }
})
