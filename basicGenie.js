
var BasicGenie = require('./library/basicCard.js');

var cardInfo = require('./basic.json');

var inquirer = require('inquirer');



var question = 0;

var wrongArr =[];

var rightArr = [];

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

            var card = new BasicGenie(answers);

            console.log('card' + card);

            console.log('answer' + answers);

            for (let i = 0; i < question.length; i++) {

            console.log('\n' + 'You guessed: ' + answers[i] + '\n' + 

                        'Correct answer is: ' + cardInfo[i].back + '\n'

                        + '-----------------------------------\n');
            }

            console.log('answer2' + answers);

            //for(let i = 0; i < question.length; i++){

                if(answers[i] == cardInfo[i].back){

                    correct = rightArr.push(answers);

                } else {

                    incorrect = wrongArr.push(answers);
                }
                question++;
                console.log('Correct: ' + correct + '\n' + 
                            'Incorrect: ' + incorrect);
            //}
         //}
        playGame(card);
    });
};
};

playGame();
