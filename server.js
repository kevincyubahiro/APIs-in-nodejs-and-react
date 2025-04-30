import mysql from 'mysql'
import cors from 'cors'
import express from 'express'
const app =express();
app.use(express.json());
app.use(cors());
const db =mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'node',
    password:''
})
db.connect((error)=>{
    if(error){
        console.log('failed')
    }
    else{
        console.log("connected")
    }
})
app.get('/select',(req,res)=>{
    const sql ="SELECT  * FROM student"
    db.query(sql,(error,result)=>{
        if(error) return res.status(500).json('failed')
            return res.status(200).json('succussfully')
    })
})
app.post('/insert',(req,res)=>{
    const {username,password}=req.body;
    const sql ="INSERT INTO student (username,password)VALUES(?,?)"
    db.query(sql,[username,password],(error,result)=>{
        if(error) return res.status(500).json('failed')
            return res.status(200).json('succussfully')
    })
})
app.listen(2000,()=>{
    console.log("running http://localhost:2000")
})
