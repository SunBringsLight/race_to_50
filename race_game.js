// object to store player's information
const player = (name) => {
    return {
        //variable that stores player's name
        _name: name,

        //variable that stores total dots rolled
        _total_dots: 0,

        //variable that stores total rolls
        _total_rolls: 0,

        //get player's name
        get name() {
            return this._name;
        },

        //see how many dots player has
        get dots() {
            return this._total_dots;
        },
        //see how many rolls play has taken
        get rolls() {
            return this._total_rolls;
        },
        //set player's name
        set name(name) {
            this._name = name;
        },
        //adds roll value to total dots
        set dots(num) {
            this._total_dots += num;
        },
        //funct for player to increment roll count
        increment_rolls() {
            this._total_rolls++;
        }
    }
}

/*
//testing player variables and functions
//initialize players
const player1 = player("Avery");
const player2 = player("Ben");

//get name
console.log(`player 1's name: ${player1.name}`);
console.log(`player 2's name: ${player2.name}`);

//get dots
console.log(`player1's current dots count: ${player1.dots}`);
console.log(`player2's current dots count: ${player2.dots}`);

//get rolls
console.log(`player1's current rolls count: ${player1.rolls}`);
console.log(`player2's current rolls count: ${player2.rolls}`);

//set player's name
player1.name = 'Andrew';
player2.name = 'Bob';
console.log(`player 1's name: ${player1.name}`);
console.log(`player 2's name: ${player2.name}`);

//roll die
player1.dots = 1;
player2.dots = 5;
console.log(`player1's current dots count: ${player1.dots}`);
console.log(`player2's current dots count: ${player2.dots}`);
player1.dots = 2;
player2.dots = 3;
console.log(`player1's current dots count: ${player1.dots}`);
console.log(`player2's current dots count: ${player2.dots}`);


//increment rolls
player1.increment_rolls();
player2.increment_rolls();
console.log(`player1's current rolls count: ${player1.rolls}`);
console.log(`player2's current rolls count: ${player2.rolls}`);
*/
