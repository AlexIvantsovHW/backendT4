const express=require('express')
const app=express();
const cors = require('cors')
const port=process.env.PORT||3001
const bodyParser=require('body-parser')
const mysql=require('mysql')
var multer = require("multer");
var upload = multer({ dest: "./upload/" });

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send('Hi world!')
})
const conn=mysql.createConnection({
    host:'b84dqwfhqpm5c7276nrx-mysql.services.clever-cloud.com',
    user:'uto01fc3j05paiyr',
    database:'b84dqwfhqpm5c7276nrx',
    password:'1jvZsXyh7Igpg0kHMBAS'
})
app.get('/data',(req,res)=>{   
    let sql="SELECT * FROM dataTable";
    conn.query(sql,(err,result)=>{
        if(err){console.log(err);
        }else{res.send(result)}
    })
})
app.post('/form',upload.array(),(req,res)=>{  
    const name=req.body.name;
    const email=req.body.email;
    const tReg=req.body.tReg;
    const pass=req.body.pass;

    let qUpdate="INSERT INTO `dataTable`(`name`,`email`,`tReg`,`status`,`password`) VALUES(?,?,?,?,?)"
    conn.query(qUpdate,[name,email,tReg,'Active',pass],(err)=>{console.log(err);})
})
app.post('/active',upload.array(),(req,res)=>{  
    let qUpdate="UPDATE `dataTable` SET `status`=? WHERE `id` IN (?)"
    conn.query(qUpdate,['Active',req.body],(err)=>{console.log(err);})
})
app.post('/block',upload.array(),(req,res)=>{  
    let qUpdate="UPDATE `dataTable` SET `status`=? WHERE `id` IN (?)"
    conn.query(qUpdate,['Blocked',req.body],(err)=>{console.log(err);})
})
app.post('/log',upload.array(),(req,res)=>{  
    const tLog=req.body.tLog;
    const name=req.body.name;
    const password=req.body.password;
    let qUpdate="UPDATE `dataTable` SET `tLog`=?, `status`=? WHERE `name`=? AND `password`=?"
    conn.query(qUpdate,[tLog,'Active',name,password],(err)=>{console.log(err);})
})
app.post('/allDelete',upload.array(),(req,res)=>{  
    let qUpdate="TRUNCATE TABLE dataTable"
    conn.query(qUpdate,(err)=>{console.log(err);})
})
app.post('/delete',upload.array(),(req,res)=>{  
    const TargetId=req.body;
    let qUpdate="DELETE FROM `dataTable` WHERE id IN (?)"
    conn.query(qUpdate,[TargetId],(err)=>{console.log(err);})
})

app.listen(port,()=>{console.log(`App is started, port: ${port}`)})
