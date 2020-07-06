const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://seunghyun:seunghyun@cluster0.6vrvw.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser:true,useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))
//mongodb + srv://seunghyun:<password>@cluster0.6vrvw.mongodb.net/<dbname>?retryWrites=true&w=majority
//mongodb + srv://seunghyun:<password>@cluster0.6vrvw.mongodb.net/<dbname>?retryWrites=true&w=majority



app.get('/', (req, res) => res.send('Hello World!'))
//app.METHOD(PATH, HANDLER)
//app : express의 인스턴스
//METHOD: HTTP 요청 메소드
//PATH : 서버에서의 경로
//HANDLER : 라우트가 일치할 때 실행되는 함수


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))