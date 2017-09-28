
var BasicGenie = require('./library/basicCard.js');

var cardInfo = require('./basic.json');

var inquirer = require('inquirer');



var question = 0;

//var wrongArray =[];

var cardArray = [];

function playGame() {

    if (question < 2) {

    console.log('Next question');

    inquirer.prompt([

        {   type: "input",
            message: cardInfo[0].front,
            name: cardInfo[0].back
        },
        {   type: "input",
            message: cardInfo[1].front,
            name: cardInfo[1].back
        }]).then(function (answers) {

            for(let i = 0; i < cardInfo.length; i++){

            var card = new BasicGenie(answers.name);

            }

            //card.split(',');

            //cardArray.push(card);

            //console.log(JSON.parse(card, null, 2));
;

            for (let i = 0; i < cardInfo.length; i++) {

            console.log('\n' + 'You guessed: ' + answers.name + '\n' + 

                        'Correct answer is: ' + cardInfo[i].back + '\n'

                        + '-----------------------------------\n');
            }

            console.log('answer2' + answers);
            question++;
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
    };
}

playGame();
