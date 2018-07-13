$( document ).ready(function(){

var userScore = 0;
var wins = 0;
var losses = 0;

//Variable that creates a random number between 19-120. *101 give you between 0-101. +19 makes it so that the lowest # is 19, highest 120
var randomNumber = Math.floor(Math.random()*101 + 19)
//Add the value generate to the html ID "randNum"
$("#randomNum").text(randomNumber);

//Variables for each gem setting up random number between 1-12
var gem1= Math.floor(Math.random()*11+1)
var gem2= Math.floor(Math.random()*11+1)
var gem3= Math.floor(Math.random()*11+1)
var gem4= Math.floor(Math.random()*11+1)

//function that resets the user score to 0, and creates new set of random numbers. Do not call this function until W or L achieved
function resetGame() {
    randomNumber = Math.floor(Math.random()*101 + 19);
    $("#randomNum").text(randomNumber);
    gem1= Math.floor(Math.random()*11+1);
    gem2= Math.floor(Math.random()*11+1);
    gem3= Math.floor(Math.random()*11+1);
    gem4= Math.floor(Math.random()*11+1);
    userScore = 0;
    $("#playerScore").text(userScore);
}

//function that alerts user they won, adds 1 to wins, resets game
function win() {
    alert("You win!");
    wins++;
    $("#wins").text("Wins: " + wins);
    resetGame();
}

//function that alerts user they lost, adds 1 to losses, resets game
function lose() {
    alert("You lose!");
    losses++;
    $("#losses").text("Losses: " + losses);
    resetGame();
}

//click function for each color button. If userScore equals the randomNumber (not === bc comparing string to number) then run win function
//if userScore > randomNumber, run lose function
$("#blue").on ('click', function(){
    userScore = userScore + gem1;
    $("#playerScore").text(userScore); 
        if (userScore == randomNumber){
          win();
        }
        else if (userScore > randomNumber){
          lose();
        }   
  })
  
  $("#green").on ('click', function(){
    userScore = userScore + gem2;
    $("#playerScore").text(userScore); 
        if (userScore == randomNumber){
          win();
        }
        else if (userScore > randomNumber){
          lose();
        }   
  })  

  $("#red").on ('click', function(){
    userScore = userScore + gem3;
    $("#playerScore").text(userScore); 
        if (userScore == randomNumber){
          win();
        }
        else if (userScore > randomNumber){
          lose();
        }   
  })  

  $("#yellow").on ('click', function(){
    userScore = userScore + gem4;
    $("#playerScore").text(userScore); 
        if (userScore == randomNumber){
          win();
        }
        else if (userScore > randomNumber){
          lose();
        }   
  })  
})