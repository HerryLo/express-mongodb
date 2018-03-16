var express = require('express');
var router = express.Router();
var Mock = require('mockjs');

var Random = Mock.Random
var color = Random.color()
var word = Random.word(5)

router.get('/', (req, res)=> {
    let data = Mock.mock({
      'm1|7': [{
        'id|+1': 1,
        'img': `@IMAGE(271x381, ${color}, #FFF, ${word})`,
        'name': '@Name',
        'title': '@TiTLE',
        'type': 'movie'
      }],
      'm2|7': [{
        'id|+1': 10,
        'img': `@IMAGE(271x381, ${color}, #FFF, ${word})`,
        'name': '@Name',
        'title': '@TiTLE',
        'type': 'movie'
      }],
      'm3|7': [{
        'id|+1': 20,
        'img': `@IMAGE(271x381, ${color}, #FFF, ${word})`,
        'name': '@Name',
        'title': '@TiTLE',
        'type': 'movie'
      }],
      'success': '@integer(0, 1)'
    })
    res.send(data)
  })

  module.exports = router;