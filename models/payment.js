
const mongoose = require("mongoose");

const paymentUserSchema = new mongoose.Schema({

  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const paymentUserModels = mongoose.model('payment', paymentUserSchema);
module.exports = paymentUserModels;