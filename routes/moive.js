var express = require('express');
var router = express.Router();
let Mock = require('mockjs')

var Random = Mock.Random
let color = Random.color()
let word = Random.word(5)

app.get('/api/movie', (req, res) => {
    let data = Mock.mock({
      '影院热映|7': [{
        'id|+1': 1,
        'img1': `@IMAGE(271x381, ${color}, #FFF, ${word})`,
        'name': '@Name',
        'title': '@TiTLE',
        'type': 'movie'
      }],
      '免费在线观影|7': [{
        'id|+1': 10,
        'img1': `@IMAGE(271x381, ${color}, #FFF, ${word})`,
        'name': '@Name',
        'title': '@TiTLE',
        'type': 'movie'
      }],
      '新片速递|7': [{
        'id|+1': 20,
        'img1': `@IMAGE(271x381, ${color}, #FFF, ${word})`,
        'name': '@Name',
        'title': '@TiTLE',
        'type': 'movie'
      }],
      'success': '@integer(0, 1)'
    })
    res.send(JSON.stringify(data, null, 4))
  })

  module.exports = router;