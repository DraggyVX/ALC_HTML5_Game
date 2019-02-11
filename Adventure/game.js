var input;
var room = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 50, 100, 150, 666];
var weapon = ["fist", "basic-sword", "club"];
var items = ["lanturn"];
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
                            room = 666;
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
                            room = 50;
                        break;

                        case "south":
                        case "go south":
                            Output("You walk into the grassy fields. You can see faintly to the far south is a giant mountain range. You can see to the east a town. You can see to the west a massive forest.");
                            room = 100;
                        break;
                            
                        case "west":
                        case "go west":
                            Output("You go towards the forest to the west. There is a road that leads into the forest. On the side of the road is an old ruined carriage.");
                            room = 150;
                        break;
                    }
            break;

        case 1: //On the road
            switch (input)
                {
                    case "Go around the swamp": //towards old house
                    case "go around the swamp":
                    case "around":
                    case "Around":
                    case "go around":
                    case "Go around":
                        Output("You start going around the swamp and soon you can see an old looking house.");
                        Output("-Go to old looking house");
                        Output("-Go around old looking house");
                        Output("-Look around old looking house");
                        Output("-Go back to road");
                        room = 2;
                    break;
                        
                    case "Go into the swamp": //death
                    case "go to swamp":
                    case "go into the swamp":
                        Output("You get stuck in mud giant leeches come out from the water and eat you alive. *You have died*");
                        Output("-restart?");
                        room = 666;
                    break;
                        
                    case "Go east on the road": //towards the town
                    case "go east":
                    case "east":
                        Output("You follow the road and approach the town. The town is surrounded by a huge wall the only entrance you can see is through a giant gate.");
                        Output("-go around the wall");
                        Output("-try going through the gate");
                        Output("-sneak into a carriage");
                        Output("-go back to your tree");
                        room = 50;
                    break;
                        
                    case "Go west on the road": //towards the forest
                    case "go west":
                    case "west":
                        Output("You go west on the road and approach a forest. On the side of the road is an old ruined carriage.");
                        Output("-Go into the forest");
                        Output("-Go to carriage");
                        Output("-go back to your tree");
                        room = 150;
                    break;
                }
        break;
            
        case 2: //go around the swamp
        switch (input) 
            {
                case "go to old looking house":
                    Output("You go to the old looking house. There is a front door and a window next to it. The old looking house looks old and abandoned. There’s a weak looking door.");
                    Output("-Break the door down");
                    Output("-Try to open door");
                    Output("-Go through the window");
                    Output("-Go back");
                    room = 3;
                break;
                
                case "go around old looking house":
                    Output("You go around the old looking house. You can see swamp as far as the eye can see.");
                    Output("-Keep going?");
                    Output("-Go back to old house?");
                    room = 4;
                break;
                    
                case "look around old looking hosue":
                    Output("You look around the old looking house. The old looking house looks old and abandoned. There is a front door and a window next to it. You notice there is a hatch on the side of the old looking house.");
                    Output("-Open hatch");
                    Output("-break hatch");
                    Output("-go to door");
                    Output("-go to window");
                    Output("-go back");
                    room = 5;
                break;
            }
        break;
            
        case 3: //go to old looking house
        switch (input) 
            {
                case "Break the door down":
                    Output("");
                break;
                    
                case "Try to open door":
                    
                break;
                
                case "Go through the window":
                    
                break;    
                    
                case "look around old looking house":
                    Output("You look around the old looking house. The old looking house looks old and abandoned. There is a front door and a window next to it. You notice there is a hatch on the side of the old looking house.");
                break;
            }
        break;
            
        case 4: //go around old looking house
        switch (input) 
            {
                    
            }
        break;
            
        case 5: //look around old looking house
        switch (input) 
            {
                    
            }
        break;
            
        case 6: 
        switch (input) 
            {
                    
            }
        break;
            
        case 7: 
        switch (input) 
            {
                    
            }
        break;
            
        case 8: 
        switch (input) 
            {
                    
            }
        break;
            
        case 9: 
        switch (input) 
            {
                    
            }
        break;
            
        case 10: 
        switch (input) 
            {
                    
            }
        break;
            
        case 11: 
        switch (input) 
            {
                    
            }
        break;
            
        case 50: //approaching town (go east from start)
            switch (input) 
                {
                    case "go around the wall":
                        
                    break;
                    
                    case "try going through the gate":
                        
                    break;
                        
                    case "sneak into a carriage":
                        
                    break;
                        
                    case "go back to your tree":

                    break;
                        
                }
        break;
            
        case 100: //Into the plains (go south from start)
            switch (input) 
                {
                        
                }
        break;
            
        case 150: //
            switch (input)
                {
                        
                }
        break;
        
            
            
            
        case 666: //When you die
            switch (input)
                {
                    case "restart":
                    case "start over":
                    case "Restart":
                    case "Start Over":
                        Output("Darn you lost... restarting.... Good luck!");
                        room = 0;
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