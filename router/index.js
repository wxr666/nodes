const express=require('express');
const mysql=require('mysql');
const con=mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'wangxueru0312',
    database:'test'
})
con.connect(function(err){
    console.log(err)
})
const router=express.Router();
module.exports=(req,res) => {
    con.query('select * from text2 where tit="家长服务"',(err,result) => {
        res.render('index',{
            data1:result
        })
    })
}