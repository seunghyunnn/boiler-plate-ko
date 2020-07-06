const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    }, 
    email: {
        type: String,
        trim: true, //스페이스를 없애주는 역할 
        unique : 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, //number가 1이면 관리자 0이면 일반 user이런 식으로
        default:0 //지정하지 않으면 0을 주겠다.
    },
    image: String,
    token: {
        type : String
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = {User}