//setting the constructor 
function ClozeGenie(front, back) {

    //making the constructor scope safe
    if (this instanceof ClozeGenie) {

        //the full text of the card, the complete text (i.e, George Washington was the first president of the United States.)
        this.full = full;

        //the back of the card to hold the clozer or missing portion (i.e. George Washington)
        this.clozer = clozer;

        //the front of the card to hold the partial text (i.e. ______________ was the first president of the United States.)
        this.partial = partial;

    } else {

        //building the constructor to work without the 'new' keyword
        return new ClozeGenie(name, front, back);
    }
}

module.exports = ClozeGenie;