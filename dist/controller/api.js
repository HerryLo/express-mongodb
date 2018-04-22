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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVyL2FwaS5qcyJdLCJuYW1lcyI6WyJBcnRkYXRhIiwidGl0bGUiLCJjb250ZW50IiwidGltZSIsIkRhdGUiLCJ1c2VybmFtZSIsImltZ1NyYyIsImF2YXRhckltZyIsImF0dGVudGlvbiIsImNvbW1lbnQiLCJBUEkiLCJyZXEiLCJyZXMiLCJuZXh0IiwiSlNUT0tFTiIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiZmluZEFydExpc3QiLCJyZXN1bHQiLCJsZW5ndGgiLCJzZW5kIiwiZGF0YSIsImNvZGUiLCJjcmVhdGVBcnRMaXN0IiwicXVlcnkiLCJ1cmwiLCJHZXRJbWciLCJ0aGVuIiwicmVkaXJlY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxVQUFVO0FBQ1pDLFdBQU8sd0NBREs7QUFFWkMsYUFBUyw2RkFGRztBQUdaQyxVQUFNLElBQUlDLElBQUosRUFITTtBQUlaQyxjQUFVLFVBSkU7QUFLWkMsWUFBUSxrSUFMSTtBQU1aQyxlQUFXLHdIQU5DO0FBT1pDLGVBQVcsRUFQQztBQVFaQyxhQUFTO0FBUkcsQ0FBaEI7O0lBV01DLEc7Ozs7Ozs7O0FBQ0Y7Ozs7Ozs7aUhBTWNDLEcsRUFBS0MsRyxFQUFLQyxJOzs7Ozs7QUFDZEMsdUMsR0FBVUgsSUFBSUksT0FBSixDQUFZRCxPOztBQUM1QkUsd0NBQVFDLEdBQVIsQ0FBWUgsT0FBWjs7O3VDQUV5Qix1QkFBYUksV0FBYixDQUF5QixFQUF6QixDOzs7QUFBZkMsc0M7O0FBQ04sb0NBQUlBLE9BQU9DLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJSLHdDQUFJUyxJQUFKLENBQVMsRUFBRUMsTUFBTUgsTUFBUixFQUFnQkksTUFBTSxDQUF0QixFQUFUO0FBQ0g7Ozs7Ozs7O0FBRURQLHdDQUFRQyxHQUFSO0FBQ0FKOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlSOzs7Ozs7Ozs7O21IQU1vQkYsRyxFQUFLQyxHLEVBQUtDLEk7Ozs7Ozs7O3VDQUVELHVCQUFhVyxhQUFiLENBQTJCeEIsT0FBM0IsQzs7O0FBQWZtQixzQzs7QUFDTixvQ0FBSUEsT0FBT0MsTUFBUCxHQUFnQixDQUFwQixFQUF1QjtBQUNuQlIsd0NBQUlTLElBQUosQ0FBUyxFQUFFQyxNQUFNSCxNQUFSLEVBQWdCSSxNQUFNLENBQXRCLEVBQVQ7QUFDSDs7Ozs7Ozs7QUFFRFAsd0NBQVFDLEdBQVI7QUFDQUo7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSVI7Ozs7Ozs7Ozs7bUhBTWVGLEcsRUFBS0MsRyxFQUFLQyxJOzs7Ozs7QUFDZlkscUMsR0FBUWQsSUFBSWMsSztBQUNaQyxtQyxHQUFNRCxNQUFNbkIsTTs7QUFDbEIsb0NBQUlvQixHQUFKLEVBQVM7QUFDTCxvREFBTUMsTUFBTixDQUFhRCxHQUFiLEVBQ0tFLElBREwsQ0FDVSxVQUFVRixHQUFWLEVBQWU7QUFDakJkLDRDQUFJaUIsUUFBSixDQUFhLFVBQVVILEdBQXZCO0FBQ0gscUNBSEw7QUFJSCxpQ0FMRCxNQUtPO0FBQ0hkLHdDQUFJUyxJQUFKLENBQVMsRUFBRUMsTUFBTSxFQUFSLEVBQVlDLE1BQU0sQ0FBbEIsRUFBVDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlUTyxPQUFPQyxPQUFQLEdBQWlCLElBQUlyQixHQUFKLEVBQWpCIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcnRMaXN0TW9kZWwgZnJvbSAnLi4vbW9kZWwvYXJ0TGlzdE1vZGVsJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4uL3V0aWxzL3V0aWxzJ1xuXG5jb25zdCBBcnRkYXRhID0ge1xuICAgIHRpdGxlOiAn44CQ6K6h566X5py65pys56eR6KGl5YWo6K6h5YiS44CRQ0NG6K6h566X5py66IGM5Lia6LWE5qC86K6k6K+BIDIwMTcwOS0wMS8wMuivpuinoycsXG4gICAgY29udGVudDogJ+ato+aWh+S5i+WJjSDosozkvLzmiJHmib7liLDnmoTpgqPkuKrpopjnm67nvZHnq5nmm7TmlrDkuobkuIDms6LmnIDmlrDnmoTpopjnm67jgILkuI3ov4cyMDE3MDkg5Y+q5pyJMeOAgTIg6aKY77yM5omA5Lul5YWI5YGa5LqG5ZCn77yI5YW25a6e5piv5oiR6Ieq5bex5a+56IO95LiN6IO95YGa5Ye656ys5LiJ6aKYIOaMgeaAgOeWkeaAgeW6pu+8ge+8ieWuneWuneW/g+mHjOiLpuWViu+8ge+8ge+8gfCfmK3vvIHvvIEuLi4nLFxuICAgIHRpbWU6IG5ldyBEYXRlKCksXG4gICAgdXNlcm5hbWU6ICflpKfliptfRGFyY3knLFxuICAgIGltZ1NyYzogJ2h0dHA6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8zODEwNzc1LWQ0MzYxYTQxYjIyNTcyYjEucG5nP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXB8aW1hZ2VWaWV3Mi8xL3cvMzAwL2gvMjQwJyxcbiAgICBhdmF0YXJJbWc6ICdodHRwOi8vdXBsb2FkLmppYW5zaHUuaW8vdXNlcnMvdXBsb2FkX2F2YXRhcnMvMjMxMzQ2Ni9mZWUzZDlkODY1NTQ/aW1hZ2VNb2dyMi9hdXRvLW9yaWVudC9zdHJpcHxpbWFnZVZpZXcyLzEvdy82NC9oLzY0JyxcbiAgICBhdHRlbnRpb246IDM0LFxuICAgIGNvbW1lbnQ6IDExMFxufTtcblxuY2xhc3MgQVBJIHtcbiAgICAvKipcbiAgICAgKiDmn6Xmib7mlofnq6DliJfooahcbiAgICAgKiBAcGFyYW0geyp9IHJlcSBcbiAgICAgKiBAcGFyYW0geyp9IHJlcyBcbiAgICAgKiBAcGFyYW0geyp9IG5leHQgXG4gICAgICovXG4gICAgYXN5bmMgYXJ0TGlzdChyZXEsIHJlcywgbmV4dCkge1xuICAgICAgICBjb25zdCBKU1RPS0VOID0gcmVxLnNlc3Npb24uSlNUT0tFTjtcbiAgICAgICAgY29uc29sZS5sb2coSlNUT0tFTik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBhcnRMaXN0TW9kZWwuZmluZEFydExpc3Qoe30pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzLnNlbmQoeyBkYXRhOiByZXN1bHQsIGNvZGU6IDAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yib5bu65paH56ug5YiX6KGoXG4gICAgICogQHBhcmFtIHsqfSByZXEgXG4gICAgICogQHBhcmFtIHsqfSByZXMgXG4gICAgICogQHBhcmFtIHsqfSBuZXh0IFxuICAgICAqL1xuICAgIGFzeW5jIGNyZWF0ZUFydExpc3QocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGFydExpc3RNb2RlbC5jcmVhdGVBcnRMaXN0KEFydGRhdGEpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzLnNlbmQoeyBkYXRhOiByZXN1bHQsIGNvZGU6IDAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Zu+54mH5oqT5Y+WXG4gICAgICogQHBhcmFtIHsqfSByZXEgXG4gICAgICogQHBhcmFtIHsqfSByZXMgXG4gICAgICogQHBhcmFtIHsqfSBuZXh0IFxuICAgICAqL1xuICAgIGFzeW5jIGZldGNoSW1nKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gcmVxLnF1ZXJ5O1xuICAgICAgICBjb25zdCB1cmwgPSBxdWVyeS5pbWdTcmM7XG4gICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgIHV0aWxzLkdldEltZyh1cmwpXG4gICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHVybCkge1xuICAgICAgICAgICAgICAgICAgICByZXMucmVkaXJlY3QoJy9pbWcvJyArIHVybCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXMuc2VuZCh7IGRhdGE6IFwiXCIsIGNvZGU6IDAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbmV3IEFQSSgpXG5cbiJdfQ==