const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is require'],
    },
    password: {
        type: String,
        required: [true, 'password is require'],
    },
    email: {
        type: String,
        required: [true, 'email is require'],
    },
    firstname: {
        type: String,
        required: [true, 'firstname is require'],
    },
    lastname: {
        type: String,
        required: [true, 'lastname is require'],
    },
    // id_card: {
    //     type: String,
    //     required: [true, 'id_card is require'],
    // },
    phone_number: {
        type: String,
        required: [true, 'phone_number is require'],
    },
    address: {
        type: String,
        // required: [true, 'address is require'],
    },
    sex: {
        type: String,
        enum: ['male', 'female'],
        required: [true, 'sex is require'],
    },
    member_id: {
        type: String,
    },
    role:{
        type: String,
        enum: ["member", "admin", "employee", "trainer"],
        default: "member"
    },
    notification: {
        type: Array,
        default: []
    },
    seenotification: {
        type: Array,
        default: []
    }
})

const userModel = mongoose.model('users', userSchema)

module.exports = userModel;