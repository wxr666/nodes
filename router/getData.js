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
    con.query('select * from text1',(err,result) => {
        res.send({
            data:result
        })
    })
}