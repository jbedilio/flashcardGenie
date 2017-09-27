var inquirer = require('inquirer');

var basicGenie = require('./basicCard.js');

flashCards = [];

inquirer.prompt([
    {   type: input
        message: '?'}
    {   name: 'front',
        message: 'Enter your question fool!'
    },
    {   name: 'back',
        message: 'Enter your answer fool!'}
                 /* Pass your questions in here */]).then(function (card) {
        var card = BasicGenie(name, front, back);
        c
});