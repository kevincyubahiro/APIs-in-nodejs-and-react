import mysql from'mysql'
import express from 'express'
import cors from 'cors'
const app=express();
app.use(express.json());
app.use(cors());
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'node',
    password:''
})
db.connect((error)=>{
    if(error){
        console.log("failed")
    }
    else{
        console.log('yes connected')
    }
})
//select
app.get('/select',(req,res)=>{
    const sql ="SELECT * FROM student"
    db.query(sql,(error,result)=>{
        if(error) return res.status(500).json('failed')
            return res.status(200).json(result)
    })
})
//insert
app.post('/insert',(req,res)=>{
    const {username,password}=req.body;
    const sql="INSERT INTO student (username,password)VALUES(?,?)";
    db.query(sql,[username,password],(error,result)=>{
        if(error) return res.status(500).json('failed')
            return res.status(200).json(result)
        
    })
})
//delete
app.delete('/delete/:id',(req,res)=>{
    const{id}=req.params;
    const sql="DELETE FROM student WHERE id=?";
    db.query(sql,[id],(error,result)=>{
        if(error) return res.status(500).json('failed')
            return res.status(200).json(result)

    })
    

})
app.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    const {username,password}=req.body;
    const sql="UPDATE student SET username=?,password=? WHERE id=?";
    db.query(sql,[username,password,id],(error,result)=>{
        if(error) return res.status(500).json("failed")
            return res.status(200).json('inserted')
    })
})
app.listen(3000,()=>{
    console.log('app running on port htpp://localhost:3000')
})