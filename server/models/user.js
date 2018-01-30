var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [4, "Minimum length is 4"]
    }
}, { timestamps: true });

var User = mongoose.model('User', UserSchema);

module.exports = User;