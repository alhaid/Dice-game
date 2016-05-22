/*
 * Name:  [Hamzah Shafeeq]
 * Assignment:  [Assignment1]

 * [This is a two players game called pig game. Script file for the pig game]
 */
//var to hold the dice total.
var diceTotal = 0;
//var to check the players turn.
var player1Turn = true;
//var to hold player one dice total.
var player1Total = 0;
//var to hold player two dice total.
var player2Total = 0;
//var to hold the holded numbers by player one.
var player1Points = 0;
//var to hold the holded numbers by player two.
var player2Points = 0;
//it holds the random number for dice 1.
var dice1 = 0;
//it holds the random number for dice 2.
var dice2 = 0;
//function that works when the user clicks on the player turn.
function rollDice() {
    //make the hold button visible
    document.getElementById("btnHold").style.visibility = "visible";
    //genrate two random numbers
    var rNumOne = Math.floor(Math.random() * 6) + 1;
    var rNumTwo = Math.floor(Math.random() * 6) + 1;

    //asign the dices
    dice1 = document.getElementById("diceOne").innerHTML = rNumOne;
    dice2 = document.getElementById("diceTwo").innerHTML = rNumTwo;
    diceTotal = rNumOne + rNumTwo; //dice total
    //reset the dice color
    document.getElementById("diceOne").style.border = "2px solid #33CCCC";
    document.getElementById("diceTwo").style.border = "2px solid #33CCCC";
    diceColor(dice1, dice2, diceTotal);
    //the display box, used here to display the dice total.
    document.getElementById("result").innerHTML = "You have rolled ("
            + diceTotal + ")";

    //player one turn
    if (player1Turn) {
        document.getElementById("btnRoll").innerHTML = "Player One Turn";
        playerColor(player1Turn);
        if (dice1 === 1 || dice2 === 1 || diceTotal === 2) {
            player1Turn = false;
            player1Total = 0; //reset the total
            document.getElementById("player1Total").innerHTML = player1Total;
            document.getElementById("btnRoll").innerHTML = "Player Two Turn";
            playerColor(player1Turn);
            //check if both dices have the number 1.
            if (diceTotal === 2) { 
                player1Points = 0;
                document.getElementById("pointsPlayer1")
                        .innerHTML = player1Points;
            }
        } else {
            player1Total += diceTotal;
            document.getElementById("player1Total").innerHTML = player1Total;
        }
    } else { //player two turn
        if (dice1 === 1 || dice2 === 1 || diceTotal === 2) {
            player1Turn = true;
            player2Total = 0; //reset the total
            document.getElementById("btnRoll").innerHTML = "Player One Turn";
            document.getElementById("player2Total").innerHTML = player2Total;
            playerColor(player1Turn);
            //check if both dices have the number 1.
            if (diceTotal === 2) { 
                player2Points = 0;
                document.getElementById("pointsPlayer2")
                        .innerHTML = player2Points;
            }
        } else {
            player2Total += diceTotal;
            document.getElementById("player2Total").innerHTML = player2Total;
        }
    }

}
//function used to hold the numbers and change turns.
function hold() {
    //player one
    if (player1Turn) { 
        player1Points += player1Total;
        document.getElementById("pointsPlayer1").innerHTML = player1Points;
        player1Total = 0; //resetting the total to 0.
        document.getElementById("player1Total").innerHTML = player1Total;
        player1Turn = false;
        //hide hold button to avoid player 2 holding the same number as player 1
        document.getElementById("btnHold").style.visibility = "hidden";
        //change turn to player two
        document.getElementById("btnRoll").innerHTML = "Player Two Turn";
        playerColor(player1Turn);
    } else { //player two
        player2Points += player2Total;
        document.getElementById("pointsPlayer2").innerHTML = player2Points;
        player2Total = 0; //resetting the total to 0.
        document.getElementById("player2Total").innerHTML = player2Total;
        player1Turn = true;
        //hide hold button to avoid player 2 holding the same number as player 1
        document.getElementById("btnHold").style.visibility = "hidden";
        //change turn to player two
        document.getElementById("btnRoll").innerHTML = "Player One Turn";
        playerColor(player1Turn);
    }
    //chack if one of the players wins the game.
    if (player1Points >= 100) {
        document.getElementById("result").innerHTML = "Player One wins!";
        hide();
        player1Turn = true;
        playerColor(player1Turn);
    } else if (player2Points >= 100) {
        document.getElementById("result").innerHTML = "Player Two wins!";
        hide();
        player1Turn = false;
        playerColor(player1Turn);
    }
}
//hide method is used to hide the two buttons if one of the players gets to 100.
function hide() {
    document.getElementById("btnHold").style.visibility = "hidden";
    document.getElementById("btnRoll").style.visibility = "hidden";
}
//function used to change color to help the user to identify the turn
function playerColor(player1Turn) {
    //change colors for the player turn.
    if (player1Turn) {
        document.getElementById("player1Total").style
                .border = "2px solid #33FF99";
        document.getElementById("pointsPlayer1").style
                .border = "2px solid #33FF99";
        document.getElementById("player2Total").style
                .border = "2px solid #33CCCC";
        document.getElementById("pointsPlayer2").style
                .border = "2px solid #33CCCC";
    } else {
        document.getElementById("player2Total").style
                .border = "2px solid #33FF99";
        document.getElementById("pointsPlayer2").style
                .border = "2px solid #33FF99";
        document.getElementById("player1Total").style
                .border = "2px solid #33CCCC";
        document.getElementById("pointsPlayer1").style
                .border = "2px solid #33CCCC";
    }
}
//function used to change color when number 1 occur.
function diceColor(dice1, dice2, diceTotal) {
    //change colors in case the #1 occur.
    if (dice1 === 1) {
        document.getElementById("diceOne").style.border = "2px solid #FF0000";
    } else if (dice2 === 1) {
        document.getElementById("diceTwo").style.border = "2px solid #FF0000";
    } else if (diceTotal === 2) {
        document.getElementById("diceOne").style.border = "2px solid #FF0000";
        document.getElementById("diceTwo").style.border = "2px solid #FF0000";
    }
}
//fucntion to desplay some help to the user.
function help() {
    alert("This is a two players game. Press the start button to start the game"
            + "\n\
    1.Use the hold button to hold number you get.\n\
    2.Player loses his/her turn if he/she hold a number or one of the dices\n\
    come up the number 1.\n\
    3.If both dices have the number 1 the player loses all his/her points.\n\
    4.Player wins the game if he/she collects a 100 points.");
}

