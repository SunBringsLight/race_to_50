# race_to_50
Race To 50 is a simple game where the players roll a die until they get at least 50 dots total. The winner is whomever has the lowest number of rolls taken to reach the goal. This project is created in response to CodeAcademy's Full Stack Career Path course in creating a first project to practice JavaScript syntax.

# Breakdown of Project

## class
To store data of each player
- name: variable that stores player's name
- total_dots: variable that stores total dots rolled
- total_rolls: variable that stores total rolls
- get name: get player's name
- get dots: funct for game to see how many dots player has
- get rolls: funct for game to see how many rolls play has taken
- set name: set player's name
- set rolls: sets roll count value to total rolls
- roll die: acts as player rolling a die and adds the value to total dots rolled
- increment_rolls: funct for player to increment roll count


## functions
- generate random number: randomly generates value between 1-6
- find_winner: identifies player with least amount of rolls


# Steps
1. in an array, create players, naming each of them as their player number created (i+1)
for each player, do steps 2-4:
2. roll die
3. increment total rolls
4. repeat steps 2-3 if total dots is less than 50

5. identify winner
