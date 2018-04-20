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
                var result;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                _context.next = 3;
                                return _artListModel2.default.findArtList({});

                            case 3:
                                result = _context.sent;

                                if (result.length > 0) {
                                    res.send({ data: result, code: 0 });
                                }
                                _context.next = 11;
                                break;

                            case 7:
                                _context.prev = 7;
                                _context.t0 = _context['catch'](0);

                                console.log(_context.t0);
                                next();

                            case 11:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 7]]);
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
                                        res.redirect('/img/' + url);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL2FwaS5qcyJdLCJuYW1lcyI6WyJBcnRkYXRhIiwidGl0bGUiLCJjb250ZW50IiwidGltZSIsIkRhdGUiLCJ1c2VybmFtZSIsImltZ1NyYyIsImF2YXRhckltZyIsImF0dGVudGlvbiIsImNvbW1lbnQiLCJBUEkiLCJyZXEiLCJyZXMiLCJuZXh0IiwiZmluZEFydExpc3QiLCJyZXN1bHQiLCJsZW5ndGgiLCJzZW5kIiwiZGF0YSIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlQXJ0TGlzdCIsInF1ZXJ5IiwidXJsIiwiR2V0SW1nIiwidGhlbiIsInJlZGlyZWN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsVUFBVTtBQUNaQyxXQUFPLHdDQURLO0FBRVpDLGFBQVMsNkZBRkc7QUFHWkMsVUFBTSxJQUFJQyxJQUFKLEVBSE07QUFJWkMsY0FBVSxVQUpFO0FBS1pDLFlBQVEsa0lBTEk7QUFNWkMsZUFBVyx3SEFOQztBQU9aQyxlQUFXLEVBUEM7QUFRWkMsYUFBUztBQVJHLENBQWhCOztJQVdNQyxHOzs7Ozs7OztBQUNGOzs7Ozs7O2lIQU1jQyxHLEVBQUtDLEcsRUFBS0MsSTs7Ozs7Ozs7dUNBRUssdUJBQWFDLFdBQWIsQ0FBeUIsRUFBekIsQzs7O0FBQWZDLHNDOztBQUNOLG9DQUFJQSxPQUFPQyxNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ25CSix3Q0FBSUssSUFBSixDQUFTLEVBQUVDLE1BQU1ILE1BQVIsRUFBZ0JJLE1BQU0sQ0FBdEIsRUFBVDtBQUNIOzs7Ozs7OztBQUVEQyx3Q0FBUUMsR0FBUjtBQUNBUjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJUjs7Ozs7Ozs7OzttSEFNb0JGLEcsRUFBS0MsRyxFQUFLQyxJOzs7Ozs7Ozt1Q0FFRCx1QkFBYVMsYUFBYixDQUEyQnRCLE9BQTNCLEM7OztBQUFmZSxzQzs7QUFDTixvQ0FBSUEsT0FBT0MsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNuQkosd0NBQUlLLElBQUosQ0FBUyxFQUFFQyxNQUFNSCxNQUFSLEVBQWdCSSxNQUFNLENBQXRCLEVBQVQ7QUFDSDs7Ozs7Ozs7QUFFREMsd0NBQVFDLEdBQVI7QUFDQVI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVI7Ozs7Ozs7Ozs7bUhBTWVGLEcsRUFBS0MsRyxFQUFLQyxJOzs7Ozs7QUFDZlUscUMsR0FBUVosSUFBSVksSztBQUNaQyxtQyxHQUFNRCxNQUFNakIsTTs7QUFDbEIsb0NBQUlrQixHQUFKLEVBQVM7QUFDTCxvREFBTUMsTUFBTixDQUFhRCxHQUFiLEVBQ0tFLElBREwsQ0FDVSxVQUFVRixHQUFWLEVBQWU7QUFDakJaLDRDQUFJZSxRQUFKLENBQWEsVUFBVUgsR0FBdkI7QUFDSCxxQ0FITDtBQUlILGlDQUxELE1BS087QUFDSFosd0NBQUlLLElBQUosQ0FBUyxFQUFFQyxNQUFNLEVBQVIsRUFBWUMsTUFBTSxDQUFsQixFQUFUO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVRTLE9BQU9DLE9BQVAsR0FBaUIsSUFBSW5CLEdBQUosRUFBakIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFydExpc3RNb2RlbCBmcm9tICcuLi9tb2RlbC9hcnRMaXN0TW9kZWwnXG5pbXBvcnQgdXRpbHMgZnJvbSAnLi4vdXRpbHMvdXRpbHMnXG5cbmNvbnN0IEFydGRhdGEgPSB7XG4gICAgdGl0bGU6ICfjgJDorqHnrpfmnLrmnKznp5HooaXlhajorqHliJLjgJFDQ0borqHnrpfmnLrogYzkuJrotYTmoLzorqTor4EgMjAxNzA5LTAxLzAy6K+m6KejJyxcbiAgICBjb250ZW50OiAn5q2j5paH5LmL5YmNIOiyjOS8vOaIkeaJvuWIsOeahOmCo+S4qumimOebrue9keermeabtOaWsOS6huS4gOazouacgOaWsOeahOmimOebruOAguS4jei/hzIwMTcwOSDlj6rmnIkx44CBMiDpopjvvIzmiYDku6XlhYjlgZrkuoblkKfvvIjlhbblrp7mmK/miJHoh6rlt7Hlr7nog73kuI3og73lgZrlh7rnrKzkuInpopgg5oyB5oCA55aR5oCB5bqm77yB77yJ5a6d5a6d5b+D6YeM6Ium5ZWK77yB77yB77yB8J+Yre+8ge+8gS4uLicsXG4gICAgdGltZTogbmV3IERhdGUoKSxcbiAgICB1c2VybmFtZTogJ+Wkp+WKm19EYXJjeScsXG4gICAgaW1nU3JjOiAnaHR0cDovL3VwbG9hZC1pbWFnZXMuamlhbnNodS5pby91cGxvYWRfaW1hZ2VzLzM4MTA3NzUtZDQzNjFhNDFiMjI1NzJiMS5wbmc/aW1hZ2VNb2dyMi9hdXRvLW9yaWVudC9zdHJpcHxpbWFnZVZpZXcyLzEvdy8zMDAvaC8yNDAnLFxuICAgIGF2YXRhckltZzogJ2h0dHA6Ly91cGxvYWQuamlhbnNodS5pby91c2Vycy91cGxvYWRfYXZhdGFycy8yMzEzNDY2L2ZlZTNkOWQ4NjU1ND9pbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3N0cmlwfGltYWdlVmlldzIvMS93LzY0L2gvNjQnLFxuICAgIGF0dGVudGlvbjogMzQsXG4gICAgY29tbWVudDogMTEwXG59O1xuXG5jbGFzcyBBUEkge1xuICAgIC8qKlxuICAgICAqIOafpeaJvuaWh+eroOWIl+ihqFxuICAgICAqIEBwYXJhbSB7Kn0gcmVxIFxuICAgICAqIEBwYXJhbSB7Kn0gcmVzIFxuICAgICAqIEBwYXJhbSB7Kn0gbmV4dCBcbiAgICAgKi9cbiAgICBhc3luYyBhcnRMaXN0KHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcnRMaXN0TW9kZWwuZmluZEFydExpc3Qoe30pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzLnNlbmQoeyBkYXRhOiByZXN1bHQsIGNvZGU6IDAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yib5bu65paH56ug5YiX6KGoXG4gICAgICogQHBhcmFtIHsqfSByZXEgXG4gICAgICogQHBhcmFtIHsqfSByZXMgXG4gICAgICogQHBhcmFtIHsqfSBuZXh0IFxuICAgICAqL1xuICAgIGFzeW5jIGNyZWF0ZUFydExpc3QocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFydExpc3RNb2RlbC5jcmVhdGVBcnRMaXN0KEFydGRhdGEpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzLnNlbmQoeyBkYXRhOiByZXN1bHQsIGNvZGU6IDAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Zu+54mH5oqT5Y+WXG4gICAgICogQHBhcmFtIHsqfSByZXEgXG4gICAgICogQHBhcmFtIHsqfSByZXMgXG4gICAgICogQHBhcmFtIHsqfSBuZXh0IFxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoSW1nKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcmVxLnF1ZXJ5O1xuICAgICAgICBjb25zdCB1cmwgPSBxdWVyeS5pbWdTcmM7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIHV0aWxzLkdldEltZyh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgICAgICAgICAgICByZXMucmVkaXJlY3QoJy9pbWcvJyArIHVybCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuc2VuZCh7IGRhdGE6IFwiXCIsIGNvZGU6IDAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IEFQSSgpXG5cbiJdfQ==