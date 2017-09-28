
var BasicGenie = require('./library/basicCard.js');

var cardInfo = require('./basic.json');

var inquirer = require('inquirer');


var correct = 0;

var incorrect = 0;

var count = 0;

var cardArray = [];

function playGame() {

    if (count < cardInfo.length) {

    console.log('Next question');

    inquirer.prompt([

        {   type: "input",
            message: cardInfo[count].front,
            name: 'answer'
        }
        ]).then(function (data) {

            if(data.answer == cardInfo[count].back){

                correct++;

            } else {

                incorrect++;

                console.log('\n' + 'You guessed: ' + data.answer + '\n' +

                    'Correct answer is: ' + cardInfo[count].back + '\n'

                    + '-----------------------------------\n');
            }
            //card.split(',');

            //cardArray.push(card);

            //console.log(JSON.parse(card, null, 2));

            

            console.log('answer2', data);
            count++;
            /*for(let i = 0; i < question.length; i++){

                if(answers[i] == cardInfo[i].back){

                    correct = rightArr.push(card);

                } else {

                    incorrect = wrongArr.push(card);
                }
                question++;
                console.log('Correct: ' + correct + '\n' + 
                            'Incorrect: ' + incorrect);
            }*/
        playGame();
        })
    } else {

        console.log('\n' + 'You got ' + incorrect + ' incorrect.' + '\n' +

            'Your got ' + correct + ' correct.' + '\n'

            + '-----------------------------------\n');
        }
    };

playGame();
