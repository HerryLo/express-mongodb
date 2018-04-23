'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _artListModel = require('../model/artListModel');

var _artListModel2 = _interopRequireDefault(_artListModel);

var _utils = require('../utils/utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Artdata = {
    title: '【计算机本科补全计划】CCF计算机职业资格认证 201709-01/02详解',
    content: '正文之前 貌似我找到的那个题目网站更新了一波最新的题目。不过201709 只有1、2 题，所以先做了吧（其实是我自己对能不能做出第三题 持怀疑态度！）宝宝心里苦啊！！！😭！！...',
    time: new Date(),
    username: '大力_Darcy',
    imgSrc: 'http://upload-images.jianshu.io/upload_images/3810775-d4361a41b22572b1.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    avatarImg: 'http://upload.jianshu.io/users/upload_avatars/2313466/fee3d9d86554?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    attention: 34,
    comment: 110
};

var API = function () {
    function API() {
        (0, _classCallCheck3.default)(this, API);
    }

    (0, _createClass3.default)(API, [{
        key: 'artList',

        /**
         * 查找文章列表
         * @param {*} req 
         * @param {*} res 
         * @param {*} next 
         */
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
                var JSTOKEN, result;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                JSTOKEN = req.session.JSTOKEN;

                                console.log(JSTOKEN);
                                _context.prev = 2;
                                _context.next = 5;
                                return _artListModel2.default.findArtList({});

                            case 5:
                                result = _context.sent;

                                if (result.length > 0) {
                                    res.send({ data: result, code: 0 });
                                }
                                _context.next = 13;
                                break;

                            case 9:
                                _context.prev = 9;
                                _context.t0 = _context['catch'](2);

                                console.log(_context.t0);
                                next();

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[2, 9]]);
            }));

            function artList(_x, _x2, _x3) {
                return _ref.apply(this, arguments);
            }

            return artList;
        }()

        /**
         * 创建文章列表
         * @param {*} req 
         * @param {*} res 
         * @param {*} next 
         */

    }, {
        key: 'createArtList',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res, next) {
                var result;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                _context2.next = 3;
                                return _artListModel2.default.createArtList(Artdata);

                            case 3:
                                result = _context2.sent;

                                if (result.length > 0) {
                                    res.send({ data: result, code: 0 });
                                }
                                _context2.next = 11;
                                break;

                            case 7:
                                _context2.prev = 7;
                                _context2.t0 = _context2['catch'](0);

                                console.log(_context2.t0);
                                next();

                            case 11:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 7]]);
            }));

            function createArtList(_x4, _x5, _x6) {
                return _ref2.apply(this, arguments);
            }

            return createArtList;
        }()

        /**
         * 图片抓取
         * @param {*} req 
         * @param {*} res 
         * @param {*} next 
         */

    }, {
        key: 'fetchImg',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res, next) {
                var query, url;
                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                query = req.query;
                                url = query.imgSrc;

                                if (url) {
                                    _utils2.default.GetImg(url).then(function (url) {
                                        setTimeout(function () {
                                            res.redirect('/img/' + url);
                                        }, 500);
                                    });
                                } else {
                                    res.send({ data: "", code: 0 });
                                }

                            case 3:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function fetchImg(_x7, _x8, _x9) {
                return _ref3.apply(this, arguments);
            }

            return fetchImg;
        }()
    }]);
    return API;
}();

module.exports = new API();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL2FwaS5qcyJdLCJuYW1lcyI6WyJBcnRkYXRhIiwidGl0bGUiLCJjb250ZW50IiwidGltZSIsIkRhdGUiLCJ1c2VybmFtZSIsImltZ1NyYyIsImF2YXRhckltZyIsImF0dGVudGlvbiIsImNvbW1lbnQiLCJBUEkiLCJyZXEiLCJyZXMiLCJuZXh0IiwiSlNUT0tFTiIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiZmluZEFydExpc3QiLCJyZXN1bHQiLCJsZW5ndGgiLCJzZW5kIiwiZGF0YSIsImNvZGUiLCJjcmVhdGVBcnRMaXN0IiwicXVlcnkiLCJ1cmwiLCJHZXRJbWciLCJ0aGVuIiwic2V0VGltZW91dCIsInJlZGlyZWN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVTtBQUNaQyxXQUFPLHdDQURLO0FBRVpDLGFBQVMsNkZBRkc7QUFHWkMsVUFBTSxJQUFJQyxJQUFKLEVBSE07QUFJWkMsY0FBVSxVQUpFO0FBS1pDLFlBQVEsa0lBTEk7QUFNWkMsZUFBVyx3SEFOQztBQU9aQyxlQUFXLEVBUEM7QUFRWkMsYUFBUztBQVJHLENBQWhCOztJQVdNQyxHOzs7Ozs7OztBQUNGOzs7Ozs7O2lIQU1jQyxHLEVBQUtDLEcsRUFBS0MsSTs7Ozs7O0FBQ2RDLHVDLEdBQVVILElBQUlJLE9BQUosQ0FBWUQsTzs7QUFDNUJFLHdDQUFRQyxHQUFSLENBQVlILE9BQVo7Ozt1Q0FFeUIsdUJBQWFJLFdBQWIsQ0FBeUIsRUFBekIsQzs7O0FBQWZDLHNDOztBQUNOLG9DQUFJQSxPQUFPQyxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ25CUix3Q0FBSVMsSUFBSixDQUFTLEVBQUVDLE1BQU1ILE1BQVIsRUFBZ0JJLE1BQU0sQ0FBdEIsRUFBVDtBQUNIOzs7Ozs7OztBQUVEUCx3Q0FBUUMsR0FBUjtBQUNBSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUjs7Ozs7Ozs7OzttSEFNb0JGLEcsRUFBS0MsRyxFQUFLQyxJOzs7Ozs7Ozt1Q0FFRCx1QkFBYVcsYUFBYixDQUEyQnhCLE9BQTNCLEM7OztBQUFmbUIsc0M7O0FBQ04sb0NBQUlBLE9BQU9DLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJSLHdDQUFJUyxJQUFKLENBQVMsRUFBRUMsTUFBTUgsTUFBUixFQUFnQkksTUFBTSxDQUF0QixFQUFUO0FBQ0g7Ozs7Ozs7O0FBRURQLHdDQUFRQyxHQUFSO0FBQ0FKOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlSOzs7Ozs7Ozs7O21IQU1lRixHLEVBQUtDLEcsRUFBS0MsSTs7Ozs7O0FBQ2ZZLHFDLEdBQVFkLElBQUljLEs7QUFDWkMsbUMsR0FBTUQsTUFBTW5CLE07O0FBQ2xCLG9DQUFJb0IsR0FBSixFQUFTO0FBQ0wsb0RBQU1DLE1BQU4sQ0FBYUQsR0FBYixFQUNLRSxJQURMLENBQ1UsVUFBVUYsR0FBVixFQUFlO0FBQ2pCRyxtREFBVyxZQUFLO0FBQ1pqQixnREFBSWtCLFFBQUosQ0FBYSxVQUFVSixHQUF2QjtBQUNILHlDQUZELEVBRUcsR0FGSDtBQUdILHFDQUxMO0FBTUgsaUNBUEQsTUFPTztBQUNIZCx3Q0FBSVMsSUFBSixDQUFTLEVBQUVDLE1BQU0sRUFBUixFQUFZQyxNQUFNLENBQWxCLEVBQVQ7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJVFEsT0FBT0MsT0FBUCxHQUFpQixJQUFJdEIsR0FBSixFQUFqQiIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJ0TGlzdE1vZGVsIGZyb20gJy4uL21vZGVsL2FydExpc3RNb2RlbCdcbmltcG9ydCB1dGlscyBmcm9tICcuLi91dGlscy91dGlscydcblxuY29uc3QgQXJ0ZGF0YSA9IHtcbiAgICB0aXRsZTogJ+OAkOiuoeeul+acuuacrOenkeihpeWFqOiuoeWIkuOAkUNDRuiuoeeul+acuuiBjOS4mui1hOagvOiupOivgSAyMDE3MDktMDEvMDLor6bop6MnLFxuICAgIGNvbnRlbnQ6ICfmraPmlofkuYvliY0g6LKM5Ly85oiR5om+5Yiw55qE6YKj5Liq6aKY55uu572R56uZ5pu05paw5LqG5LiA5rOi5pyA5paw55qE6aKY55uu44CC5LiN6L+HMjAxNzA5IOWPquaciTHjgIEyIOmimO+8jOaJgOS7peWFiOWBmuS6huWQp++8iOWFtuWunuaYr+aIkeiHquW3seWvueiDveS4jeiDveWBmuWHuuesrOS4iemimCDmjIHmgIDnlpHmgIHluqbvvIHvvInlrp3lrp3lv4Pph4zoi6bllYrvvIHvvIHvvIHwn5it77yB77yBLi4uJyxcbiAgICB0aW1lOiBuZXcgRGF0ZSgpLFxuICAgIHVzZXJuYW1lOiAn5aSn5YqbX0RhcmN5JyxcbiAgICBpbWdTcmM6ICdodHRwOi8vdXBsb2FkLWltYWdlcy5qaWFuc2h1LmlvL3VwbG9hZF9pbWFnZXMvMzgxMDc3NS1kNDM2MWE0MWIyMjU3MmIxLnBuZz9pbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3N0cmlwfGltYWdlVmlldzIvMS93LzMwMC9oLzI0MCcsXG4gICAgYXZhdGFySW1nOiAnaHR0cDovL3VwbG9hZC5qaWFuc2h1LmlvL3VzZXJzL3VwbG9hZF9hdmF0YXJzLzIzMTM0NjYvZmVlM2Q5ZDg2NTU0P2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXB8aW1hZ2VWaWV3Mi8xL3cvNjQvaC82NCcsXG4gICAgYXR0ZW50aW9uOiAzNCxcbiAgICBjb21tZW50OiAxMTBcbn07XG5cbmNsYXNzIEFQSSB7XG4gICAgLyoqXG4gICAgICog5p+l5om+5paH56ug5YiX6KGoXG4gICAgICogQHBhcmFtIHsqfSByZXEgXG4gICAgICogQHBhcmFtIHsqfSByZXMgXG4gICAgICogQHBhcmFtIHsqfSBuZXh0IFxuICAgICAqL1xuICAgIGFzeW5jIGFydExpc3QocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgY29uc3QgSlNUT0tFTiA9IHJlcS5zZXNzaW9uLkpTVE9LRU47XG4gICAgICAgIGNvbnNvbGUubG9nKEpTVE9LRU4pO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXJ0TGlzdE1vZGVsLmZpbmRBcnRMaXN0KHt9KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcy5zZW5kKHsgZGF0YTogcmVzdWx0LCBjb2RlOiAwIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIm+W7uuaWh+eroOWIl+ihqFxuICAgICAqIEBwYXJhbSB7Kn0gcmVxIFxuICAgICAqIEBwYXJhbSB7Kn0gcmVzIFxuICAgICAqIEBwYXJhbSB7Kn0gbmV4dCBcbiAgICAgKi9cbiAgICBhc3luYyBjcmVhdGVBcnRMaXN0KHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcnRMaXN0TW9kZWwuY3JlYXRlQXJ0TGlzdChBcnRkYXRhKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcy5zZW5kKHsgZGF0YTogcmVzdWx0LCBjb2RlOiAwIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWbvueJh+aKk+WPllxuICAgICAqIEBwYXJhbSB7Kn0gcmVxIFxuICAgICAqIEBwYXJhbSB7Kn0gcmVzIFxuICAgICAqIEBwYXJhbSB7Kn0gbmV4dCBcbiAgICAgKi9cbiAgICBhc3luYyBmZXRjaEltZyhyZXEsIHJlcywgbmV4dCkge1xuICAgICAgICBjb25zdCBxdWVyeSA9IHJlcS5xdWVyeTtcbiAgICAgICAgY29uc3QgdXJsID0gcXVlcnkuaW1nU3JjO1xuICAgICAgICBpZiAodXJsKSB7XG4gICAgICAgICAgICB1dGlscy5HZXRJbWcodXJsKVxuICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5yZWRpcmVjdCgnL2ltZy8nICsgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnNlbmQoeyBkYXRhOiBcIlwiLCBjb2RlOiAwIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG5ldyBBUEkoKVxuXG4iXX0=