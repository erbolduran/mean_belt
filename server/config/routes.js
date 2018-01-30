var path  = require('path'),
   users  = require('../controllers/users');
questions = require('../controllers/questions');
sessions  = require('../controllers/sessions');

module.exports = (app) => {
    app.post('/users', users.create);

    app.post('/questions', questions.create);
    app.get('/questions', questions.getall);

    app.get('/sessions', sessions.find);
    app.delete('/sessions', sessions.delete);

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./client/dist/index.html'))
    });
}