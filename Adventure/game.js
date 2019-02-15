var input;
var room = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 100, 150, 200, 666];
var fist = false; //will make a function will all weapons and items later 
var basicSword = false;
var club = false;
var swordOfTree = false;
var items = ["lantern"];
var deathCounter = 0;
var acheievments = ["died-more-than-10", "died-more-than-100", "Friend-of-trees"];
var element = document.getElementById("unorderedList");
var treeAlive = true;

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
        element.appendChild(newListElement);
        //Resets user-input to blank
        document.getElementById("user-input").value = ""; 
        //Goes to bottom of scroll bar
        preformAction();
        Achievement();
        newListElement.scrollIntoView(); 
    }
}

//Starts the game
function Game() {
    var PC = prompt("What is your name?");
    Output("Hello " + PC + " I am the ghost that will be guilding you on your journey through this world!");
    Output("Wakey Wakey its time to get up!");
    Output("You open your eyes, you are sitting under a tree. You look around and notice you are in a different world! Above you soars a giant red dragon. He seems to ignore you for you are just a tiny ant to him. You look around and in front of you going from east to west is a dirt road. Past the road is a swamp. On the dirt road going pretty fast is a wagon being pulled by a horse. The road leads to a big town. You look behind you and see you are under the only tree in a giant plain. You look to the east and see a lush forest.");
    Output("-go north (to the road)");
    Output("-go east (to the town)");
    Output("-go south (to the plains)");
    Output("-go west (to the forest)");
    Output("-go back to sleep"); 
    room = 0;
}

//Preform Action Thank you Jaiden
function preformAction() {
    switch(room) 
    {
        case 0: //under the tree (Starting place)
                switch (input.toLowerCase()) 
                    {
                        case "sleep":
                        case "go back to sleep":
                        case "go to sleep":
                        case "bed time":
                            if (deathCounter > 1) {
                                Output("You go back to sleep...again...and you die...again... Are you stupid!?");
                                Output("Restart?");
                                Output("Quit?");
                                room = 666;
                            }
                            else {
                                Output("You go back to sleep. Zzzz.... Zzzz.... Zzz.... ..... .... You have died. Wow you died right off the start?");
                                Output("Restart?");
                                Output("Quit?");
                                room = 666;
                                deathCounter++;
                            }         
                        break;

                        case "north":                    
                        case "go north":
                        case "n":
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
                        case "s":
                            Output("You walk into the grassy fields. You can see faintly to the far south is a giant mountain range. You can see to the east a town. You can see to the west a massive forest.");
                            room = 100;
                        break;
                            
                        case "west":
                        case "go west":
                        case "w":
                            Output("You go towards the forest to the west. There is a road that leads into the forest. On the side of the road is an old ruined carriage.");
                            room = 150;
                        break;
                            
                        case "investigate tree":
                        if (treeAlive = true) {
                            Output("You start moving around the tree looking at it.");
                            Output("What do you want? Why are you looking at me like that?");
                            room = 200;
                        }
                        Output("Sorry thats not gonna work again ;)");
                        break;
                    }
            break;

        case 1: //On the road
            switch (input.toLowerCase())
                {
                    case "go around the swamp":
                    case "around":
                    case "go around":
                        Output("You start going around the swamp and soon you can see an old looking house.");
                        Output("-Go to old looking house");
                        Output("-Go around old looking house");
                        Output("-Look around old looking house");
                        Output("-Go back to road");
                        room = 2;
                    break;
                        
                    case "go into the swamp": //death
                    case "go to swamp":
                    case "go into swamp":
                        Output("You get stuck in mud giant leeches come out from the water and eat you alive. *You have died*");
                        Output("-restart?");
                        room = 666;
                    break;
                        
                    case "go east on the road": //towards the town
                    case "go east":
                    case "east":
                        Output("You follow the road and approach the town. The town is surrounded by a huge wall the only entrance you can see is through a giant gate.");
                        Output("-go around the wall");
                        Output("-try going through the gate");
                        Output("-sneak into a carriage");
                        Output("-go back to your tree");
                        room = 50;
                    break;
                        
                    case "go west on the road": //towards the forest
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
        switch (input.toLowerCase()) 
            {
                case "go to old looking house":
                case "old looking house":
                case "go to house":
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
        switch (input.toLowerCase()) 
            {
                case "break the door down":
                case "destroy door":
                    Output("");
                    Output("");
                    Output("");
                    
                break;
                    
                case "try to open door":
                    Output("You try to open the door but it doesn't budge.");
                    Output("");
                    Output("");
                    room = 3;
                break;
                
                case "go through the window":
                    Output("You break through the window. You look around this old house and see you’re in a small room with a cauldron in the middle with shelves along the walls. The shelves have a bunch of stuff ranging from books to potions.");
                    Output("");
                    Output("");
                    Output("");
                break;    
                    
                case "look around old looking house":
                    Output("You look around the old looking house. The old looking house looks old and abandoned. There is a front door and a window next to it. You notice there is a hatch on the side of the old looking house.");
                    Output("");
                    Output("");
                    Output("");
                break;
            }
        break;
            
        case 4: //go around old looking house
        switch (input.toLowerCase()) 
            {
                    
            }
        break;
            
        case 5: //look around old looking house
        switch (input.toLowerCase()) 
            {
                    
            }
        break;
            
        case 6: 
        switch (input.toLowerCase()) 
            {
                    
            }
        break;
            
        case 7: 
        switch (input.toLowerCase()) 
            {
                    
            }
        break;
            
        case 8: 
        switch (input.toLowerCase()) 
            {
                    
            }
        break;
            
        case 9: 
        switch (input.toLowerCase()) 
            {
                    
            }
        break;
            
        case 10: 
        switch (input.toLowerCase()) 
            {
                    
            }
        break;
            
        case 11: 
        switch (input.toLowerCase()) 
            {
                    
            }
        break;
            
        case 50: //approaching town (go east from start)
            switch (input.toLowerCase()) 
                {
                    case "go around the wall":
                        Output("you walk around the wall to the other side and see another big gate.");
                        Output("-try to go through the gate");
                        Output("-keep going around");
                        Output("-go back");
                        room = 51;
                    break;
                    
                    case "try going through the gate":
                        Output("Halt! Let me see your papers!");
                        Output("A soldier in his early twenties approaches you.");
                        if (papers = true) {
                            Output("-Show him your papers");
                        }
                        Output("-run away");
                        Output("-Try to seduce him");
                        Output("-Convince him to let you through");
                        room = 52;
                    break;
                        
                    case "sneak into a carriage":
                        Output("You see a merchants carriage and jump inside. You look around it is dark and there are several crates.");
                        room = 53;
                    break;
                        
                    case "go back to your tree":
                        Output("");
                    break;
                        
                }
        break;
            
        case 100: //Into the plains (go south from start)
            switch (input.toLowerCase()) 
                {
                        
                }
        break;
            
        case 150: //
            switch (input.toLowerCase())
                {
                        
                }
        break;
        
        case 200:
            switch (input.toLowerCase())
                {
                    case "looking at your beauty":
                    case "admiring your trunk":
                        Output("I am the only tree that can talk in this region. My fellow breathren have fallen to the darn humans who chopped us down and used us for there houses.");
                        Output("I am very old now and am near the end of the line. I would like you to have this.");
                        Output("A sword seems to appear from thin air *Sword of the fallen king*");
                        swordOfTree = true;
                        treeAlive = false;
                        room = 0;
                    break;
                    default:
                        Output("You greedy human!! DIE! *You have died*");
                        Output("-restart?");
                        Output("-quit");
                        room = 666;
                    break;
                }
            
            
        case 666: //When you die
            switch (input.toLowerCase())
                {
                    case "restart":
                    case "start over":
                        restart();
                        Game();
                    break;
                        
                    case "quit":
                        Output("You quitter...");
                    break;
                }
        break;
    }
            
}

function restart() {
    while (element.hasChildNodes()) {
        element.removeChild(element.lastChild);
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

function Achievement() {
    if (deathCounter == 1 && acheievments != "died-more-than-10") {
        var newListElement = document.createElement("li");
        var node = document.createTextNode("Die more than 10 times.");
        newListElement.appendChild(node);
        var element = document.getElementById("achievements");
        element.appendChild(newListElement);
        acheievments = "died-more-than-10";
    }
    else if (swordOfTree == true) {
        var newListElement = document.createElement("li");
        var node = document.createTextNode("Friend of Trees");
        newListElement.appendChild(node);
        var element = document.getElementById("achievements");
        element.appendChild(newListElement);
        swordOfTree = false;
    }
}