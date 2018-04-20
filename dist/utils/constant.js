'use strict';

var dbUrl = 'mongodb://localhost/test';

/* 数据请求基本格式 */
var Sendformat = {
    code: '',
    desc: '',
    data: []

    /* 注册API提示 */
};var Desregister = {
    success: '注册成功',
    exist: '用户名已存在',
    hint: '请输入用户名或密码'
};

module.exports = {
    dbUrl: dbUrl,
    Sendformat: Sendformat,
    Desregister: Desregister
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jb25zdGFudC5qcyJdLCJuYW1lcyI6WyJkYlVybCIsIlNlbmRmb3JtYXQiLCJjb2RlIiwiZGVzYyIsImRhdGEiLCJEZXNyZWdpc3RlciIsInN1Y2Nlc3MiLCJleGlzdCIsImhpbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFFBQVEsMEJBQWQ7O0FBRUE7QUFDQSxJQUFNQyxhQUFhO0FBQ2ZDLFVBQU8sRUFEUTtBQUVmQyxVQUFPLEVBRlE7QUFHZkMsVUFBTzs7QUFHWDtBQU5tQixDQUFuQixDQU9BLElBQU1DLGNBQWM7QUFDaEJDLGFBQVMsTUFETztBQUVoQkMsV0FBTyxRQUZTO0FBR2hCQyxVQUFNO0FBSFUsQ0FBcEI7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUI7QUFDYlYsV0FBT0EsS0FETTtBQUViQyxnQkFBWUEsVUFGQztBQUdiSSxpQkFBYUE7QUFIQSxDQUFqQiIsImZpbGUiOiJjb25zdGFudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRiVXJsID0gJ21vbmdvZGI6Ly9sb2NhbGhvc3QvdGVzdCdcblxuLyog5pWw5o2u6K+35rGC5Z+65pys5qC85byPICovXG5jb25zdCBTZW5kZm9ybWF0ID0ge1xuICAgIGNvZGUgOiAnJyxcbiAgICBkZXNjIDogJycsXG4gICAgZGF0YSA6IFtdXG59XG5cbi8qIOazqOWGjEFQSeaPkOekuiAqL1xuY29uc3QgRGVzcmVnaXN0ZXIgPSB7XG4gICAgc3VjY2VzczogJ+azqOWGjOaIkOWKnycsXG4gICAgZXhpc3Q6ICfnlKjmiLflkI3lt7LlrZjlnKgnLFxuICAgIGhpbnQ6ICfor7fovpPlhaXnlKjmiLflkI3miJblr4bnoIEnXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGRiVXJsOiBkYlVybCxcbiAgICBTZW5kZm9ybWF0OiBTZW5kZm9ybWF0LFxuICAgIERlc3JlZ2lzdGVyOiBEZXNyZWdpc3RlclxufSJdfQ==