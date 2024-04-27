const feedbackcontroller = require("../controllers/feedbackcontroller")
const express = require("express")
const feedbackrouter  = express.Router()
feedbackrouter.post("/insertfeedbackdata",feedbackcontroller.insertfeedbackdata)
module.exports = feedbackrouter