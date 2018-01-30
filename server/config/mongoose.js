var mongoose = require('mongoose'),
    db_name  = 'loggin';

mongoose.connect(`mongodb://localhost/${db_name}`);