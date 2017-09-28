//setting the constructor 
function BasicGenie(front, back) {

    //making the constructor scope safe
    //if (this instanceof BasicGenie){

        //the front of the card to hold the question (i.e. "Who was the first president of the US?")
        this.front = front;
        
        //the back of the card to hold the answer (i.e. George Washington)
        this.back = back;

    //}else{

        //building the constructor to work without the 'new' keyword
        //return new BasicGenie(back);
    //}
}

module.exports = BasicGenie;

//var newCard = BasicGenie("What's up?", "Nothing");




//console.log(newCard);