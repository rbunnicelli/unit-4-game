$( document ).ready(function(){

//Variable that creates a random number between 19-120. *101 give you between 0-101. +19 makes it so that the lowest # is 19, highest 120
var randomNumber = Math.floor(Math.random()*101 + 19)
//Add the value generate to the html ID "randNum"
$("#randomNum").append(randomNumber);
})

