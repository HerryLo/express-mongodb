const dbUrl = 'mongodb://localhost/test'

/* 数据请求基本格式 */
const Sendformat = {
    code : '',
    desc : '',
    data : []
}

/* 注册API提示 */
const Desregister = {
    success: '注册成功',
    exist: '用户名已存在',
    hint: '请输入用户名或密码'
}

module.exports = {
    dbUrl: dbUrl,
    Sendformat: Sendformat,
    Desregister: Desregister
}