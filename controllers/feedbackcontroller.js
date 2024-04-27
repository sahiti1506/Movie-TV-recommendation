const feedback = require("../models/feedback")
const insertfeedbackdata = async (request, response) => {
    try 
    {
      const input = request.body;
      const feedbackdata = new feedback(input);
      await feedbackdata.save();
      response.status(200).send('feedback Success');
    } 
    catch(e) 
    {
      response.status(500).send(e.message);
    }
  };
module.exports = {insertfeedbackdata }