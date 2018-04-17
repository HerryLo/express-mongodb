'use strict';

var express = require('express');
var artListModel = require('../../model/artListModel.js');
var router = express.Router();

var data = {
    title: '【计算机本科补全计划】CCF计算机职业资格认证 201709-01/02详解',
    content: '正文之前 貌似我找到的那个题目网站更新了一波最新的题目。不过201709 只有1、2 题，所以先做了吧（其实是我自己对能不能做出第三题 持怀疑态度！）宝宝心里苦啊！！！😭！！...',
    time: new Date(),
    username: '大力_Darcy',
    imgSrc: 'http://upload-images.jianshu.io/upload_images/3810775-d4361a41b22572b1.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240',
    avatarImg: 'http://upload.jianshu.io/users/upload_avatars/2313466/fee3d9d86554?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64',
    attention: 34,
    comment: 110
};

/* GET home page. */
router.get('/', function (req, res, next) {
    artListFind(res);
});

router.post('/', function (req, res, next) {
    artListCreate(res);
});

function artListCreate(res) {
    artListModel.create(data, function (error) {
        if (error) {
            console.log(error);
            return true;
        } else {
            console.log('save ok');
            artListFind(res);
            return true;
        }
    });
}

function artListFind(res) {
    artListModel.find(function (error, result) {
        if (error) {
            console.log(error);
        } else {
            if (result.length > 0) {
                res.send({ data: result, code: 0 });
                return true;
            } else {
                artListCreate(res);
                return true;
            }
        }
    });
}

module.exports = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXJ0aWNsZS9hcnRMaXN0LmpzIl0sIm5hbWVzIjpbImV4cHJlc3MiLCJyZXF1aXJlIiwiYXJ0TGlzdE1vZGVsIiwicm91dGVyIiwiUm91dGVyIiwiZGF0YSIsInRpdGxlIiwiY29udGVudCIsInRpbWUiLCJEYXRlIiwidXNlcm5hbWUiLCJpbWdTcmMiLCJhdmF0YXJJbWciLCJhdHRlbnRpb24iLCJjb21tZW50IiwiZ2V0IiwicmVxIiwicmVzIiwibmV4dCIsImFydExpc3RGaW5kIiwicG9zdCIsImFydExpc3RDcmVhdGUiLCJjcmVhdGUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwicmVzdWx0IiwibGVuZ3RoIiwic2VuZCIsImNvZGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVVDLFFBQVEsU0FBUixDQUFkO0FBQ0EsSUFBSUMsZUFBZUQsUUFBUSw2QkFBUixDQUFuQjtBQUNBLElBQUlFLFNBQVNILFFBQVFJLE1BQVIsRUFBYjs7QUFFQSxJQUFJQyxPQUFPO0FBQ1BDLFdBQU8sd0NBREE7QUFFUEMsYUFBUyw2RkFGRjtBQUdQQyxVQUFNLElBQUlDLElBQUosRUFIQztBQUlQQyxjQUFVLFVBSkg7QUFLUEMsWUFBUSxrSUFMRDtBQU1QQyxlQUFXLHdIQU5KO0FBT1BDLGVBQVcsRUFQSjtBQVFQQyxhQUFTO0FBUkYsQ0FBWDs7QUFXQTtBQUNBWCxPQUFPWSxHQUFQLENBQVcsR0FBWCxFQUFnQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBV0MsSUFBWCxFQUFvQjtBQUNoQ0MsZ0JBQVlGLEdBQVo7QUFDSCxDQUZEOztBQUlBZCxPQUFPaUIsSUFBUCxDQUFZLEdBQVosRUFBaUIsVUFBQ0osR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsRUFBb0I7QUFDakNHLGtCQUFjSixHQUFkO0FBQ0gsQ0FGRDs7QUFJQSxTQUFTSSxhQUFULENBQXVCSixHQUF2QixFQUE0QjtBQUN4QmYsaUJBQWFvQixNQUFiLENBQW9CakIsSUFBcEIsRUFBMEIsVUFBQ2tCLEtBQUQsRUFBVztBQUNqQyxZQUFJQSxLQUFKLEVBQVc7QUFDUEMsb0JBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLG1CQUFPLElBQVA7QUFDSCxTQUhELE1BR087QUFDSEMsb0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0FOLHdCQUFZRixHQUFaO0FBQ0EsbUJBQU8sSUFBUDtBQUNIO0FBQ0osS0FURDtBQVVIOztBQUVELFNBQVNFLFdBQVQsQ0FBcUJGLEdBQXJCLEVBQTBCO0FBQ3RCZixpQkFBYXdCLElBQWIsQ0FBa0IsVUFBQ0gsS0FBRCxFQUFRSSxNQUFSLEVBQW1CO0FBQ2pDLFlBQUlKLEtBQUosRUFBVztBQUNQQyxvQkFBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsZ0JBQUlJLE9BQU9DLE1BQVAsR0FBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJYLG9CQUFJWSxJQUFKLENBQVMsRUFBQ3hCLE1BQU1zQixNQUFQLEVBQWVHLE1BQU0sQ0FBckIsRUFBVDtBQUNBLHVCQUFPLElBQVA7QUFDSCxhQUhELE1BR087QUFDSFQsOEJBQWNKLEdBQWQ7QUFDQSx1QkFBTyxJQUFQO0FBQ0g7QUFDSjtBQUNKLEtBWkQ7QUFhSDs7QUFFRGMsT0FBT0MsT0FBUCxHQUFpQjdCLE1BQWpCIiwiZmlsZSI6ImFydExpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZXhwcmVzcyA9IHJlcXVpcmUoJ2V4cHJlc3MnKTtcbnZhciBhcnRMaXN0TW9kZWwgPSByZXF1aXJlKCcuLi8uLi9tb2RlbC9hcnRMaXN0TW9kZWwuanMnKTtcbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG52YXIgZGF0YSA9IHtcbiAgICB0aXRsZTogJ+OAkOiuoeeul+acuuacrOenkeihpeWFqOiuoeWIkuOAkUNDRuiuoeeul+acuuiBjOS4mui1hOagvOiupOivgSAyMDE3MDktMDEvMDLor6bop6MnLFxuICAgIGNvbnRlbnQ6ICfmraPmlofkuYvliY0g6LKM5Ly85oiR5om+5Yiw55qE6YKj5Liq6aKY55uu572R56uZ5pu05paw5LqG5LiA5rOi5pyA5paw55qE6aKY55uu44CC5LiN6L+HMjAxNzA5IOWPquaciTHjgIEyIOmimO+8jOaJgOS7peWFiOWBmuS6huWQp++8iOWFtuWunuaYr+aIkeiHquW3seWvueiDveS4jeiDveWBmuWHuuesrOS4iemimCDmjIHmgIDnlpHmgIHluqbvvIHvvInlrp3lrp3lv4Pph4zoi6bllYrvvIHvvIHvvIHwn5it77yB77yBLi4uJyxcbiAgICB0aW1lOiBuZXcgRGF0ZSgpLFxuICAgIHVzZXJuYW1lOiAn5aSn5YqbX0RhcmN5JyxcbiAgICBpbWdTcmM6ICdodHRwOi8vdXBsb2FkLWltYWdlcy5qaWFuc2h1LmlvL3VwbG9hZF9pbWFnZXMvMzgxMDc3NS1kNDM2MWE0MWIyMjU3MmIxLnBuZz9pbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3N0cmlwfGltYWdlVmlldzIvMS93LzMwMC9oLzI0MCcsXG4gICAgYXZhdGFySW1nOiAnaHR0cDovL3VwbG9hZC5qaWFuc2h1LmlvL3VzZXJzL3VwbG9hZF9hdmF0YXJzLzIzMTM0NjYvZmVlM2Q5ZDg2NTU0P2ltYWdlTW9ncjIvYXV0by1vcmllbnQvc3RyaXB8aW1hZ2VWaWV3Mi8xL3cvNjQvaC82NCcsXG4gICAgYXR0ZW50aW9uOiAzNCxcbiAgICBjb21tZW50OiAxMTBcbn07XG5cbi8qIEdFVCBob21lIHBhZ2UuICovXG5yb3V0ZXIuZ2V0KCcvJywgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgYXJ0TGlzdEZpbmQocmVzKTtcbn0pO1xuXG5yb3V0ZXIucG9zdCgnLycsIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGFydExpc3RDcmVhdGUocmVzKTtcbn0pXG5cbmZ1bmN0aW9uIGFydExpc3RDcmVhdGUocmVzKSB7XG4gICAgYXJ0TGlzdE1vZGVsLmNyZWF0ZShkYXRhLCAoZXJyb3IpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlIG9rJyk7XG4gICAgICAgICAgICBhcnRMaXN0RmluZChyZXMpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhcnRMaXN0RmluZChyZXMpIHtcbiAgICBhcnRMaXN0TW9kZWwuZmluZCgoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcy5zZW5kKHtkYXRhOiByZXN1bHQsIGNvZGU6IDB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJ0TGlzdENyZWF0ZShyZXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXX0=