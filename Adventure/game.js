var input;

//Starts game
switch(new Game()){
        case 0: //North
            North();
            break;
        case 1: //East
            East();
            break;
        case 2: //South
            South();
            break;
        case 3: //West
            West();
            break;
        default:
        Opening();
        break;
}

//Whenever the user enters it returns their answer
 document.getElementById("user-input").onkeypress = function(event) {
    if(event.keyCode == 13 || event.which == 13) {   
        //Gets input from user
        input = document.getElementById("user-input").value; 
        //Makes a <li>
        var newListElement = document.createElement("li"); 
        var node = document.createTextNode(input); 
        newListElement.appendChild(node); 
        var element = document.getElementById("unorderedList");
        element.appendChild(newListElement);
        //Resets user-input to blank
        document.getElementById("user-input").value = ""; 
        //Goes to bottom of scroll bar
        newListElement.scrollIntoView(); 
        }
    }

//Starts the game
function Game() {
    var PC = prompt("What is your name?");
    
    var game = document.createElement("theGame");
    var t = document.createTextNode("Hello " + PC + " I am the ghost that will be guilding you on your journey through this world!"); 
    game.appendChild(t);
    document.getElementById('log-output').appendChild(game);
    if (input == "North") {
        return 0;
    }
    else if (document.getElementById("user-input").value == "East") {
        return 1;
    }
    else if (document.getElementById("user-input").value == "South") {
        return 2;
    }
    else if (document.getElementById("user-input").value == "West") {
        return 3;
    }
   else {
       return 4;
   }
    
}

//Outputs
function Output(input) {
        var newListElement = document.createElement("li"); //makes a <li>
        var node = document.createTextNode(input); //create a textNode
        newListElement.appendChild(node); 
        var element = document.getElementById("unorderedList");
        element.appendChild(newListElement);
        document.getElementById("user-input").value = ""; //resets user-input to blank
}

//When the game starts outputs an introduction 
function Opening() {
    var i = "dont resume";
    Output("Wakey Wakey its time to get up!");
    Output("You open your eyes, you are sitting under a tree. You look around and notice you are in a different world! Above you soars a giant red dragon. He seems to ignore you for you are just a tiny ant to him. You look around and in front of you going from west to east is a dirt road. Past the road looks to be a swamp. On the dirt road going pretty fast is a wagon being pulled by a horse. The road leads to what seems to be a big town filled with activity its only about a mile away from you. You look behind you and see you are under the only tree in a giant plains. You see off to the distance to the east a forest.");
    Output("What do you wanna do boss?");
    Output("-Go North");
    Output("-Go East");
    Output("-Go South");
    Output("-Go West");
    Output("-Go back to sleep");
    if (input == "North") {
        Output("hi");
    }
    
}

//Gets the userinput
function getInput() {
    document.getElementById("user-input").onkeypress = function(event) {
    if(event.keyCode == 13 || event.which == 13) {   
        //Gets input from user
        input = document.getElementById("user-input").value;
        return input.toLowerCase();
        }
    }
}

//if they go north from start
function North(input) {
    if (input == "north"){
        Output("You approach the road.");
    }
}
