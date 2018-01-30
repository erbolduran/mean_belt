var mongoose = require('mongoose');

var QuestSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Question is required"],
        minlength: [4, "Minimum length is 4"]
    }
}, { timestamps: true });

var Question = mongoose.model('Question', QuestSchema);

module.exports = Question;