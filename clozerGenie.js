var inquirer = require('inquirer');

var ClozeGenie = require('./library/clozerCard.js');

var answers = [];

inquirer.prompt([
    {
        type: input,
        message: 'what color is the sky?'
    }
    {   name: 'front',
        message: 'Enter your question fool!'
    },
    {
        name: 'back',
        message: 'Enter your answer fool!'
    }
                 /* Pass your questions in here */]).then(function (card) {
        var card = BasicGenie(name, front, back);
        c
    });