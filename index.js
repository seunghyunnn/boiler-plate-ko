const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key');

const{User}=require("./models/User");

//aplication/x-www-form-urlencoded 형식의 데이터를 분석해서 가져올 수 있게 해주는 코드
app.use(bodyParser.urlencoded({extended : true}));
//aplication/json 형식의 데이터를 가져올 수 있게 해주는 코드 
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser:true,useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!'))
//app.METHOD(PATH, HANDLER)
//app : express의 인스턴스
//METHOD: HTTP 요청 메소드
//PATH : 서버에서의 경로
//HANDLER : 라우트가 일치할 때 실행되는 함수

app.post('/register', (req,res)=>{
    //client에서 가져온 회원 가입 할 시 필요한 정보들을
    //데이터베이스에 넣어주는 코드 
    


    const user=new User(req.body)//bodyparser
    user.save((err, userInfo)=>{
        if(err) return res.json({success : false,err})
        return res.status(200).json({
            success : true
        })
    })//mongodb

})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))