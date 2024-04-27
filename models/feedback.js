const mongoose = require("mongoose")

const feedbackscheema = new mongoose.Schema({
    moviename: {
      type: String,
      required: true,
    },
    rating: {
      type: String,
      required:true,
      enum: ['1', '2', '3','4','5']
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
  });

const feedbackdata = mongoose.model('feedbackdata', feedbackscheema);

module.exports = feedbackdata;