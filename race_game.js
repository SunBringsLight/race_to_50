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

        //funct for player to roll die
        roll_die() {
            this._total_dots += generate_random_number();
        },

        //funct for player to increment roll count
        increment_rolls() {
            this._total_rolls++;
        }
    };
};

/***************************************************************
****************************************************************
**********            FUNCTIONS            *********************
****************************************************************
***************************************************************/

//function generate_random_number: randomly generates value between 1-6 to reflect player rolling a die
const generate_random_number = () => {
    const roll_value = Math.floor(Math.random() * 6) + 1;

    return roll_value;
};


//function find_winner: identifies player with least amount of rolls and returns player's name
const find_winner = players_arr => {

  //array to hold index of player(s) with lowest roll count
    let min_player_index = [0];

  //loop through each player and compare roll counts
    for (let player=1; player < players_arr.length; player++) {
        //if current player's roll count is less than current minimum roll count, then store index as only player with minimum roll count
        if (players_arr[player].rolls < players_arr[min_player_index[0]].rolls) {
            min_player_index = [player];
        }
        //else if the roll count is the same, keep all indexes that have the minimum roll count
        else if (players_arr[player].rolls == players_arr[min_player_index[0]].rolls) {
            min_player_index.push(player);
        };
  };
  
  //print who has minimum roll count as the winner(s)
  if (min_player_index.length > 1) {
    console.log('The winners are:');
    for (let player in min_player_index) {
      console.log(`\t${players_arr[min_player_index[player]].name}!`);
    };
  } else {
    console.log(`The winner is ${players_arr[min_player_index[0]].name}!`);
  };
  
};


//function play_game: initiates and runs through game based on how many players it was told were playing
const play_game = total_players => {
    //initialize winners
    //create players
    let players = [];
    for (let i=0; i<total_players; i++) {
        let temp_name = 'Player ' + (i+1);
        let new_player = player(temp_name);
        players.push(new_player);
    };

    //for each player, roll die until they reach 50
    for (let player in players) {
        console.log(`${players[player].name}'s turn to start rolling!`);

        do {
            console.log(`\tPlayer ${players[player].name} current dots value: ${players[player].dots}.\n\tPlayer rolls die!`);

            //tally total dots received and how many rolls done
            players[player].roll_die();
            players[player].increment_rolls();

        } while (players[player].dots < 50);

        console.log(`${players[player].name} ends with a total dots value of ${players[player].dots}.\n`);
    };
    
    //print each player's roll count
    for (let player in players) {
        console.log(`player ${players[player].name} roll value: ${players[player].rolls}`);
    };
    
    //find winner
    find_winner(players);
};


/***************************************************************
****************************************************************
**********              MAIN               *********************
****************************************************************
***************************************************************/

//start game
play_game(5);
