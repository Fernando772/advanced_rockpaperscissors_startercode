//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
var usersChoice ="";
var winner="";

//FUNCTIONS
//console.log();
//console.log(computerChoice[choiceIndex]);
function selectWinner(userChoice, computerChoice) {
    
    if (userChoice === "scissors") {
 
        if (computerChoice === "rock") {
            return "computer wins";
        } else if (computerChoice === "paper") {
            return "user wins";
        } else {
            return "it's a tie";
        }
        
    }
     if (userChoice === "rock") {
 
        if (computerChoice === "paper") {
            return "computer wins";
        } else if (computerChoice === "scissors") {
            return "user wins";
        } else {
            return "it's a tie";
        }
        
    } if (userChoice === "paper") {
 
        if (computerChoice === "scissors") {
            return "computer wins";
        } else if (computerChoice === "rock") {
            return "user wins";
        } else {
            return "it's a tie";
        }
        
    }
    
    // TODO - we need to handle the cases where the user chooses rock or paper
}

var winner = selectWinner("scissors", "rock" , "paper");



// DOCUMENT READY FUNCTION
$(document).ready(function() {

    //Click Function when shoot is clicked
    $("#shoot").click(function(){
        
        var choices=["rock","paper","scissors"];
      var choiceIndex=Math.floor(Math.random()*choices.length);
      //Takes in User Choice from the input box and stores it in a variable
      userChoice = $("#userInput").val();
      var computerChoice=choices[choiceIndex];
      //Display the user choice to the screen
      $("#usersChoice").html(userChoice);
      $("#computerChoice").html(computerChoice);
        var winner = selectWinner(userChoice , computerChoice);
        alert(winner);
    });
       
});
// DOCUMENT READY FUNCTION

