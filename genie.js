var inquirer = require('inquirer');

var basicGenie = require('./basicCard.js');

var george = BasicGenie('first president', 'Who was the first president of the United States', 'George Washington');

inquirer.prompt([
    {   name: 'front',
        message: 'Enter your question fool!'
    },
    {   name: 'back',
        message: 'Enter your answer fool!'}
                 /* Pass your questions in here */]).then(function (card) {
        var card = BasicGenie(name, front, back);
});