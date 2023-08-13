const mongoose = require('mongoose');

const UserInfo = mongoose.Schema({
  
    firstname:{
        type : String,
        required : [true,'please add the first name' ]
    },
    lastname:{
        type : String,
        required : [true,'please add the last name' ]
    },
    email:{
        type : String,
        required : [true,'please add the email'  ]
    },
    password:{
        type : String,
        required : [true,'please add the password' ]
    }
});

module.exports = mongoose.model('users' , UserInfo)