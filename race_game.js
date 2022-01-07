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
/*
        //adds roll value to total dots
        set dots(num) {
            this._total_dots += num;
        },
*/
        set rolls(num) {
          this._total_rolls = num;
        },
        //funct for player to roll die
        roll_die() {
            this._total_dots += generate_random_number();
        },
        //funct for player to increment roll count
        increment_rolls() {
            this._total_rolls++;
        }
    }
}

/***************************************************************
****************************************************************
**********            FUNCTIONS            *********************
****************************************************************
***************************************************************/

//function generate_random_number: randomly generates value between 1-6 to reflect player rolling a die
const generate_random_number = () => {
    const roll_value = Math.floor(Math.random() * 6) + 1;
    console.log(`roll die value: ${roll_value}`);

    return roll_value;
};


//function find_winner: identifies player with least amount of rolls and returns player's name
const find_winner = players_arr => {

  let min_player_index = 0;

  for (let player=1; player < players_arr.length; player++) {
    if (players_arr[player].rolls < players_arr[min_player_index].rolls) {
      min_player_index = player;
    }
  };
  
  console.log(`The winner is ${players_arr[min_player_index].name}!`);
  
};



//initialize winners
//create players
let players = [];
for (let i=0; i<5; i++) {
  let temp_name = 'Player' + (i+1);
  let new_player = player(temp_name);
  players.push(new_player);
}
players[0].rolls = 5;
players[1].rolls = 7;
players[2].rolls = 1;
players[3].rolls = 89;
players[4].rolls = 10;

//print each player's rolls
for (let player in players) {
    console.log(`player ${players[player].name} roll value: ${players[player].rolls}`);
}

//find winner
find_winner(players);
