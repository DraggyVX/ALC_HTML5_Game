var input;
var room = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 100, 150, 200, 666];
var inventory = new Array(10);
var skills = new Array(20);
var inventorySize = new Array(5);
var deathCounter = 0;
var acheievments = ["died-more-than-10", "died-more-than-100", "Friend-of-trees"];
var element = document.getElementById("unorderedList");
var treeAlive = true;

Reset();
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
        InventoryManage();
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
        //under the tree (Starting place)
        case 0: 
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
                        if (treeAlive == true) {
                            Output("You start moving around the tree looking at it.");
                            Output("What do you want? Why are you looking at me like that?");
                            room = 200;
                        }
                        else
                            Output("Sorry thats not gonna work again ;)"); 
                        
                        break;
                    }
        break;

        //On the road
        case 1: 
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
           
        //go around the swamp
        case 2: 
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
                case "go around":
                    Output("You go around the old looking house. You can see swamp as far as the eye can see.");
                    Output("-Keep going?");
                    Output("-Go back to old house?");
                    room = 4;
                break;
                    
                case "look around old looking hosue":
                case "look":
                case "look around":
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
           
        //go to old looking house
        case 3: 
            switch (input.toLowerCase()) 
                {
                case "break the door down":
                case "destroy door":
                    Output("You break down the door and see you’re in a small room with a cauldron in the middle with shelves along the walls. The shelves have a bunch of stuff ranging from books to potions.");
                    Output("-take potions");
                    Output("-take books");
                    Output("-read books");
                    room = 6;
                break;
                    
                case "try to open door":
                case "open door":
                    Output("You try to open the door but it doesn't budge.");
                    Output("-break down door");
                    Output("-try opening door again");
                    Output("-go through the window");
                    Output("-look around old looking house");
                    room = 3;
                break;
                
                case "go through the window":
                    Output("You break through the window. You look around this old house and see you’re in a small room with a cauldron in the middle with shelves along the walls. The shelves have a bunch of stuff ranging from books to potions.");
                    Output("-take potions");
                    Output("-take books");
                    Output("-read books");
                    room = 6;
                break;    
                    
                case "look around old looking house":
                    Output("You look around the old looking house. The old looking house looks old and abandoned. There is a front door and a window next to it. You notice there is a hatch on the side of the old looking house.");
                    Output("-break down front door");
                    Output("-go through the window");
                    Output("-try opening hatch");
                    Output("-break down hatch");
                    room = 7;
                break;
            }
        break;
           
        //go around old looking house
        case 4: 
        switch (input.toLowerCase()) 
            {
                    
            }
        break;
            
        //look around old looking house
        case 5: 
        switch (input.toLowerCase()) 
            {
                    
            }
        break;
            
        //inside the old house
        case 6:
        switch (input.toLowerCase()) 
            {
                case "take potions":
                    if (inventory[1] != true) {
                        Output("You take the potions");
                        inventory[1] = true;
                    }
                    else
                        Output("You already took the potions... idiot..");
                    room = 6;
                break;
                    
                case "take books":
                    if (inventory[2] != true) {
                        Output("You take the books");
                        inventory[2] = true;
                    }
                    else 
                        Output("You already took the books... idiot..");
                    room = 6;
                break;
                    
                case "read books":
                    Output("You read the books. They are about potion making.");
                    Output("*You gained potion making knowledge*");
                    
                    room = 6;
                break;
                
            }
        break;
            
        //side of the old house
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
                    case "sorry":
                        Output("I am the only tree that can talk in this region. My fellow breathren have fallen to the darn humans who chopped us down and used us for there houses.");
                        Output("I am very old now and am near the end of the line. I would like you to have this.");
                        Output("A sword seems to appear from thin air. It has runes along the blade. The tree goes on a long tangent on how he got the sword and ends with him telling you the swords name. *Sword of the fallen king*");
                        Output("You have obtained *Sword of the fallen king*");
                        inventroy[1] = true;
                        treeAlive = false;
                        Output("-go north (to the road)");
                        Output("-go east (to the town)");
                        Output("-go south (to the plains)");
                        Output("-go west (to the forest)");
                        Output("-go back to sleep");
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

function Reset() {
    //makes the array for all the items in your inventory
    for (var i = 0; i < inventory.length; ++i) { 
            inventory[i] = false; 
    }

    //makes an array for inventorySize
    for (var i = 0; i < inventorySize.length; ++i) { 
            inventorySize[i] = false; 
    }

    //makes an array for skills
    for (var i = 0; i < skills.length; ++i) { 
            skills[i] = false; 
    }
}

function InventoryManage(inventory) {
    //Inventory at 0 is the BladeOfTheRuinedKing
    var size = 0;
    var item1, item2, item3, item4, item5 = null;
    //Looks for the amount of stuff in your inventory
    for (var i = 0; i < inventory.length; ++i){
        if (inventory[i] != false)
            {
                size++;
            }
    }
    //sets items to values
    if (size < 6){
        for (var i = 0; i < inventory.length; ++i){
        if (inventory[i] != false)
            {
                if (item1 == null){
                    item1 = inventory[i];
                }
                else if (item2 == null){
                    item2 = inventory[i];
                }
                else if (item3 == null){
                    item3 = inventory[i];
                }
                else if (item4 == null){
                    item4 = inventory[i];
                }
                else if (item5 == null){
                    item5 = inventory[i];
                }
            }
        }
    }
    //makes sure you have less than 5 items then outputs the items on screen
    switch(size) {
        case 0:
            var node = document.getElementById("item1");
            switch(item1) {
                case 0:
                    node.innerHTML("Sword of the Ruined King");
                break;
                    
                case 1:
                
                break;
                    
                case 2:
                
                break;
                    
                case 3:
                
                break;
                    
                case 4:
                
                break;
                    
                case 5:
                
                break;
                    
                case 6:
                
                break;
                    
                case 7:
                
                break;
                    
                case 8:
                
                break;
                    
                case 9:
                
                break;
                
                case 10:
                    
                break;
            }
             
        break;
            
        case 1:
                
        break;
            
        case 2:
                
        break;
            
        case 3:
                
        break;
            
        case 4:
                
        break;
            
        default:
            Output("Your inventory is full!");
        break;
    }
}
    

