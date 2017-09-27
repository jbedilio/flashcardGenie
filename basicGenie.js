var BasicGenie = require('./library/basicCard.js');

var cardInfo = require('./basic.json');

var inquirer = require('inquirer');

var wrongArr =[];

var rightArr = [];



inquirer.prompt([
    {   type: input,
        message: 'what color is the sky?',
        name: 

                 /* Pass your questions in here */]).then(function (card) {
        var card = BasicGenie(card.front, card.back);
});