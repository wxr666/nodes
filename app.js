//下载 引入模块
const express=require('express');

const path=require('path');
const bodyParser=require('body-parser');
//实例化
const app=express();
//设置模块引擎
app.set('views',path.join(process.cwd(),'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(process.cwd(),'static','js')));

//注册路由
const list=require('./router/list.js')
app.get('/list',list)
//登录用户名和密码进行判断
const getData=require('./router/getData.js')
app.get('/getData',getData)
//在页面中显示初始状态
const index=require('./router/index.js')
app.get('/index',index)
//输入input框值，点击搜索显示对应的内容
//req.query.tit=家长服务
//req.query.tit=自主服务
const getout=require('./router/getout.js')
app.get('/getOut',getout)
//删除
const get=require('./router/gets.js')
app.get('/Gets',get)
//点击下面按钮显示对应内容
const gets=require('./router/getnum.js')
app.get('/getNum',gets)
//监听端口号
app.listen(8088)