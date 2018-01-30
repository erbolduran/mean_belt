var session = require('express-session'),
      Quest = require('../models/question');


module.exports = {
    create: (req, res) => {
        let newQuest = new Quest(req.body);

        Quest.findOne({content: newQuest.content}, (err, quest) => {
            if (quest) {
                return res.json(quest);
            }           
            
            newQuest.save((err) => {
                if (err) {
                    return res.json(err);
                }

                return res.json(newQuest)
            })

        });
    },

    getall: (req, res) => { 
        Quest.find({}, (err, quest) => {
            if (err) {
                return res.json(err.errors);
            }

            return res.json(quest);
        })
    },
}