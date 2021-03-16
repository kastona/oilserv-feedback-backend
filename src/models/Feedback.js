const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
   
    feedback: mongoose.Schema.Types.Mixed
}, {
    timestamps: true
})


const Feedback = mongoose.model('Feedback', feedbackSchema)
module.exports = Feedback
