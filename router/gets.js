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
    con.query('delete from text2 where id='+req.query.id+'',(err,results) => {
        res.send()
    })
}