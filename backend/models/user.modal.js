const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    title:{
        type: String,
        required: true
    },

    article:{
        type: String,
        required: true
    },


    price: {
        type: Number,
        required: true
    }, 

    tel: {
        type: Number,
        required:true
    },

    authorname: {
        type: String,
        required:true
    },

    pic: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

/*  title:'',
    article:'',
    price:'',
    tel:'',
    authorname:'',
    pic:'' */