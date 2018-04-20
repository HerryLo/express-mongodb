'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;
var ArtcileListSchema = new Schema({
    title: String,
    content: String,
    time: String,
    username: String,
    imgSrc: String,
    attention: Number,
    comment: Number,
    avatarImg: String
});

ArtcileListSchema.statics = {
    /* 查找 */
    findArtList: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(data) {
            var result;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.find(data);

                        case 2:
                            result = _context.sent;
                            return _context.abrupt('return', result);

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function findArtList(_x) {
            return _ref.apply(this, arguments);
        }

        return findArtList;
    }(),

    /* 创建 */
    createArtList: function () {
        var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(data) {
            var result;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return this.create(data);

                        case 2:
                            result = _context2.sent;
                            return _context2.abrupt('return', result);

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function createArtList(_x2) {
            return _ref2.apply(this, arguments);
        }

        return createArtList;
    }()
};

var artListModel = _mongoose2.default.model('artList', ArtcileListSchema);

module.exports = artListModel;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbC9hcnRMaXN0TW9kZWwuanMiXSwibmFtZXMiOlsiU2NoZW1hIiwiQXJ0Y2lsZUxpc3RTY2hlbWEiLCJ0aXRsZSIsIlN0cmluZyIsImNvbnRlbnQiLCJ0aW1lIiwidXNlcm5hbWUiLCJpbWdTcmMiLCJhdHRlbnRpb24iLCJOdW1iZXIiLCJjb21tZW50IiwiYXZhdGFySW1nIiwic3RhdGljcyIsImZpbmRBcnRMaXN0IiwiZGF0YSIsImZpbmQiLCJyZXN1bHQiLCJjcmVhdGVBcnRMaXN0IiwiY3JlYXRlIiwiYXJ0TGlzdE1vZGVsIiwibW9kZWwiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUVBLElBQU1BLFNBQVMsbUJBQVNBLE1BQXhCO0FBQ0EsSUFBTUMsb0JBQW9CLElBQUlELE1BQUosQ0FBVztBQUNqQ0UsV0FBT0MsTUFEMEI7QUFFakNDLGFBQVNELE1BRndCO0FBR2pDRSxVQUFNRixNQUgyQjtBQUlqQ0csY0FBVUgsTUFKdUI7QUFLakNJLFlBQVFKLE1BTHlCO0FBTWpDSyxlQUFXQyxNQU5zQjtBQU9qQ0MsYUFBU0QsTUFQd0I7QUFRakNFLGVBQVdSO0FBUnNCLENBQVgsQ0FBMUI7O0FBV0FGLGtCQUFrQlcsT0FBbEIsR0FBNEI7QUFDeEI7QUFDTUMsZUFGa0I7QUFBQSw2R0FFTkMsSUFGTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUdDLEtBQUtDLElBQUwsQ0FBVUQsSUFBVixDQUhEOztBQUFBO0FBR2RFLGtDQUhjO0FBQUEsNkRBSWJBLE1BSmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBTXhCO0FBQ01DLGlCQVBrQjtBQUFBLCtHQU9KSCxJQVBJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBUUMsS0FBS0ksTUFBTCxDQUFZSixJQUFaLENBUkQ7O0FBQUE7QUFRZEUsa0NBUmM7QUFBQSw4REFTYkEsTUFUYTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLENBQTVCOztBQWFBLElBQU1HLGVBQWUsbUJBQVNDLEtBQVQsQ0FBZSxTQUFmLEVBQTBCbkIsaUJBQTFCLENBQXJCOztBQUVBb0IsT0FBT0MsT0FBUCxHQUFpQkgsWUFBakIiLCJmaWxlIjoiYXJ0TGlzdE1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJ1xuXG5jb25zdCBTY2hlbWEgPSBtb25nb29zZS5TY2hlbWE7XG5jb25zdCBBcnRjaWxlTGlzdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgY29udGVudDogU3RyaW5nLFxuICAgIHRpbWU6IFN0cmluZyxcbiAgICB1c2VybmFtZTogU3RyaW5nLFxuICAgIGltZ1NyYzogU3RyaW5nLFxuICAgIGF0dGVudGlvbjogTnVtYmVyLFxuICAgIGNvbW1lbnQ6IE51bWJlcixcbiAgICBhdmF0YXJJbWc6IFN0cmluZ1xufSlcblxuQXJ0Y2lsZUxpc3RTY2hlbWEuc3RhdGljcyA9IHtcbiAgICAvKiDmn6Xmib4gKi9cbiAgICBhc3luYyBmaW5kQXJ0TGlzdChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZmluZChkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIC8qIOWIm+W7uiAqL1xuICAgIGFzeW5jIGNyZWF0ZUFydExpc3QoZGF0YSkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmNyZWF0ZShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbmNvbnN0IGFydExpc3RNb2RlbCA9IG1vbmdvb3NlLm1vZGVsKCdhcnRMaXN0JywgQXJ0Y2lsZUxpc3RTY2hlbWEpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFydExpc3RNb2RlbFxuIl19