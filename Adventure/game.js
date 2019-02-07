var input;
var room = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
Game();

//Whenever the user enters it returns their answer
 document.getElementById("user-input").onkeypress = function(event) {
    if(event.keyCode == 13 || event.which == 13) {   
        //Gets input from user
        input = document.getElementById("user-input").value; 
        getInput();
        //Makes a <li>
        var newListElement = document.createElement("li"); 
        var node = document.createTextNode(input); 
        newListElement.appendChild(node); 
        var element = document.getElementById("unorderedList");
        element.appendChild(newListElement);
        //Resets user-input to blank
        document.getElementById("user-input").value = ""; 
        //Goes to bottom of scroll bar
        preformAction();
        newListElement.scrollIntoView(); 
        }
    }

//Starts the game
function Game() {
    var PC = prompt("What is your name?");
    Output("Hello " + PC + " I am the ghost that will be guilding you on your journey through this world!");
    Output("Wakey Wakey its time to get up!");
    Output("You open your eyes, you are sitting under a tree. You look around and notice you are in a different world! Above you soars a giant red dragon. He seems to ignore you for you are just a tiny ant to him. You look around and in front of you going from west to east is a dirt road. Past the road looks to be a swamp. On the dirt road going pretty fast is a wagon being pulled by a horse. The road leads to what seems to be a big town filled with activity its only about a mile away from you. You look behind you and see you are under the only tree in a giant plains. You see off to the distance to the east a forest.");
    room = 0;
}

//Preform Action Thank you Jaiden
function preformAction() 
{
    switch(room) 
    {
        case 0: //under the tree (Starting place)
                switch (input) 
                    {
                        case "sleep":
                        case "Sleep":
                        case "go back to sleep":
                        case "go to sleep":
                        case "bed time":
                        case "Go to sleep":
                            Output("You go back to sleep. Zzzz.... Zzzz.... Zzz.... ..... .... You have died.");
                            room = 10;
                        break;

                        case "north":                    
                        case "go north":
                        case "n":
                        case "North":
                        case "Go North":
                        case "N":
                            Output("You go north and approach the road. What do you want to do now?");
                            Output("-Go around the swamp?");
                            Output("-Go into the swamp?");
                            Output("-Go east on the road?");
                            Output("-Go west on the road?");
                            room = 1;
                        break;

                        case "east":
                        case "go east":
                        case "e":
                        case "town":
                        case "go to town":
                        case "go town":
                            Output("You follow the road and approach the town. The town is surrounded by a huge wall the only entrance you can see is through a giant gate.");
                            room = 2;
                        break;

                        case "south":
                        case "go south":

                            room = 3;
                        break;
                    }
            break;
        
        case 1: //On the road
            switch (input)
                {
                    case "Go around the swamp": //towards witch hut
                        
                    break;
                        
                    case "Go into the swamp": //death
                        
                    break;
                        
                    case "Go east on the road": //towards the town
                        Output("You follow the road and approach the town. The town is surrounded by a huge wall the only entrance you can see is through a giant gate.");
                    break;
                        
                    case "Go west on the road": //towards the forest
                        
                    break;
                }
        break;
    }
            
}

//Gets the userinput
function getInput() {
    var input = document.getElementById("user-input").value;

}

//Outputs data
function Output(input) {
    //makes a <li>
    var newListElement = document.createElement("li"); 
    //create a textNode
    var node = document.createTextNode(input); 
    newListElement.appendChild(node); 
    var element = document.getElementById("unorderedList");
    element.appendChild(newListElement);
    //resets user-input to blank
    document.getElementById("user-input").value = ""; 
}