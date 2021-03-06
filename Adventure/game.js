var input;
var room = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,60, 61, 62, 63, 64, 65,              100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 100, 150, 200, 666];
var skills = new Array(20);
var inventory = ["BladeoftheRuinedking", "Sword", "potions", "books"];
var BladeoftheRuinedking = false;
var deathCounter = 0;
var acheievments = ["died-more-than-10", "died-more-than-100", "Friend-of-trees", "Seducer", "Princess-saver"];
var element = document.getElementById("unorderedList");
var treeAlive = true;
var swordOfTree = false;
var seducer = false;
var princessSaved = false;
var doorToHouse = true;
var rngNum = Math.floor((Math.random() * 100) + 1);
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
        InventoryManage();
        newListElement.scrollIntoView(); 
        
    }
}

//Starts the game
function Game() {
    var PC = prompt("What is your name?");
    alert("Hello " + PC + " I am the ghost that will be guilding you on your journey through this world!");
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
                            Output("-go around the wall");
                            Output("-try going through the gate");
                            Output("-sneak into a carriage");
                            Output("-go back to your tree");
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
                        Output("You get stuck in the mud. Giant leeches come out from the water and eat you alive.");
                        Output("*You have died*");
                        Output("-Restart?");
                        Output("-Quit?")
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
                    case "keep going":
                        Output("You keep going straight. You are walking when all of sudden your foot hits something hard. You look down and see a skull. You look up and see a giant snake strike you straight in the chest. *You have died*");
                        Output("-Restart?");
                        Output("-Quit?");
                        room = 666;
                    break;

                    case "go back":
                        Output("You go to the old looking house. There is a front door and a window next to it. The old looking house looks old and abandoned. There’s a weak looking door.");
                        Output("-Break the door down");
                        Output("-Try to open door");
                        Output("-Go through the window");
                        Output("-Go back");
                        room = 3;
                    break;
                }
        break;
            
        //look around old looking house
        case 5: 
            switch (input.toLowerCase()) 
                {
                    case "open hatch":
                        Output("You try to open the hatch... It doesn't budge.");
                        Output("-Try to open hatch");
                        Output("-break hatch");
                        Output("-go to door");
                        Output("-go to window");
                        Output("-go back");
                        room = 5;
                    break;
                        
                    case "break hatch":
                    case "break down hatch":
                        Output("You break down the hatch. You see a dark tunnel lead into the ground.");
                        Output("-Go down?");
                        Output("-go back to house?");
                        room = 8;
                    break;
                        
                    case "go to door":
                        Output("You go to the door you try the door knob and it opens. You enter a small room with shelves filled with books and potions. In the center of the room is a cauldron.");
                        Output("-take potions");
                        Output("-take books");
                        Output("-read books");
                        room = 6;
                    break;    
                    
                    case "go to window":
                        Output("You go through the window. You enter a small room with shelves filled with books and potions. In the center of the room is a cauldron.");
                        Output("-take potions");
                        Output("-take books");
                        Output("-read books");
                        room = 6;
                    break;
                        
                    case "go back":
                        Output("You go back");
                        Output("-Go to old looking house");
                        Output("-Go around old looking house");
                        Output("-Look around old looking house");
                        Output("-Go back to road");
                        room = 1;
                    break;
                }
        break;
            
        //inside the old house
        case 6:
        switch (input.toLowerCase()) 
            {
                case "take potions":
                    if (inventory["potions"] != true) {
                        Output("You take the potions");
                        inventory["potions"] = true;
                    }
                    else
                        Output("You already took the potions... idiot..");
                    room = 6;
                break;
                    
                case "take books":
                    if (inventory["books"] != true) {
                        Output("You take the books");
                        inventory["books"] = true;
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
                    case "":
                    Output("You go to the old looking house. There is a front door and a window next to it. The old looking house looks old and abandoned. There’s a weak looking door.");
                    if (doorToHouse == false) {
                        Output("-Go into house");
                        Output("-Go through the window");
                        Output("-Go back");
                    }
                    else {
                        Output("-Break the door down");
                        Output("-Try to open door");
                        Output("-Go through the window");
                        Output("-Go back");
                    }
                    room = 5;
                    break;
            }
        break;
            
        //Hatch
        case 8: 
        switch (input.toLowerCase()) 
            {
                case "go down":
                    Output("You go down, it stinks like rotten flesh down here. You hear a faint voice *please no more* You go towards the voice and see the silouhette of a young girl chained to the wall. *Who are you? Are you here to save me? You must be! there are keys on the post behind you. Hurry! before she comes back!* You look behind you and fumble around and find a hook with keys on the post. You hurry and unlock the restrainst on her. You both run out. The girl darts for the road you follow. *You have saved the princess from the old hag*");
                    Output("*Congratulations on saving the princess you have won!*");
                    princessSaved = true;
                    Output("-Restart?");
                    Output("-Quit?");
                    room = 666;
                break;
                    
                case "go back to house":
                    Output("");
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
                    case "go through gate":
                   case "go through the gate":
                   case "try going through gate":
                   case "gate":
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
                        Output("You see a merchant carriage and jump inside. You look around it is dark, but you are able to see a few crates.");
                        Output("-Hide behind crates");
                        Output("-Open crates");
                        Output("-Start singing and dancing on the crates");
                        room = 53;
                    break;
                        
                    case "go back to your tree":
                       Output("You wimp.. you go back to your tree. It is getting pretty late.");
                       Output("-go north (to the road)");
                       Output("-go east (to the town)");
                       Output("-go south (to the plains)");
                       Output("-go west (to the forest)");
                       Output("-go back to sleep");
                       room = 0;
                   break;

                        
                }
        break;
                    
        //Go around town wall
       case 51:
               switch (input.toLowerCase())
               {
                   case "try to go through the gate":
                   case "go through gate":
                   case "go through the gate":
                   case "try going through gate":
                   case "gate":
                       Output("You try to walk through...");
                       Output("Halt! Let me see your papers!");
                       Output("A soldier in his early twenties approaches you.");
                       Output("-run away");
                       Output("-Try to seduce him");
                       Output("-Convince him to let you through");
                       room = 52;
                   break;

                   case"go around":
                   case "around":
                       Output("you walk around the wall to the other side and see another big gate.");
                       Output("-try to go through the gate");
                       Output("-keep going around");
                       Output("-go back");
                       room = 51;
                   break;

                   case"go back":
                   case "back":
                       Output("You go back to the road.");
                       Output("-Go around the swamp?");
                       Output("-Go into the swamp?");
                       Output("-Go east on the road?");
                       Output("-Go west on the road?");
                       room = 1;
                   break;
               }
       break;
          
       //Going through gate
       case 52:
           switch (input.toLowerCase())
               {
                   case "run away":
                       Output("You try to run away. CATCH HIM!");
                       Output("The soldier throws his spear. It hits your leg and you go down. You get carried to prison and are later prosecuted as a thief and executed.");
                       Output("*You have died*");
                       Output("-Restart?");
                       Output("-Quit?");
                       room = 666;
                       deathCounter++;
                   break;
                  
                   case "seduce soldier":
                   case "seduce":
                    let rngNum = Math.floor((Math.random() * 100) + 1);
                       console.log(rngNum);
                       if (rngNum > 50) {
                           Output("You successfully seduce the soldier. You two get married and live happily ever after. ^-^");
                           Output("*Seducer ending*");
                           seducer = true;
                           Output("-Restart?");
                           Output("-Quit?");
                           room = 666;
                       }
                       else {
                           Output("The soldier looks at you in disgust and kills you on the spot.");
                           Output("*You have died*");
                           Output("-Restart?");
                           Output("-Quit?");
                           room = 666;
                           deathCounter++;
                       }
                   break;

                   case "convince soldier":
                   case "convince":
                       if (rngNum > 50) {
                           Output("You sneak a gold coin into the soldiers hand. He looks away and you pass by without further problem.");
                           Output("You arrive at the town, it is bustling with activity. You start heading towards a stall when a dragon carriage runs you over.");
                           Output("*You have died*");
                           Output("-Restart?");
                           Output("-Quit?");
                           room = 666;
                           deathCounter++;
                       }
                       else {
                           Output("You try to sneak a coin into the soldiers hand but end up handing him a banana.");
                           Output("The soldier looks at you in disgust and kills you on the spot.");
                           Output("*You have died*");
                           Output("-Restart?");
                           Output("-Quit?");
                           room = 666;
                           deathCounter++;
                       }
                   break;
               }
       break;

       //Sneak onto a carriage
       case 53:
           switch (input.toLowerCase())
               {
                      
               }
       break;

       //Inside the town
       case 54:
           switch (input.toLowerCase())
               {
                      
               }
       break;

       case 55:
           switch (input.toLowerCase())
               {
                      
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
                        Output("A sword seems to appear from thin air. It has runes along the blade. The tree goes on a long tangent on how he got the sword that ends with him telling you the swords name. *Sword of the fallen king*");
                        Output("You have obtained *Sword of the fallen king*");
                        BladeoftheRuinedking = true;
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
            
        //When you die 
        case 666: 
            switch (input.toLowerCase())
                {
                    case "restart":
                    case "start over":
                        restart();
                        Game();
                    break;
                        
                    case "quit":
                        prompt("You sure you want to quit?");
                        Output("You quitter...");
                        restart();
                    break;
                }
        break;
    }
            
}

//Restarts the output text
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

//Manages achievements
function Achievement() {
    if (deathCounter == 10 && acheievments != "died-more-than-10") {
        var newListElement = document.createElement("li");
        var node = document.createTextNode("-Die more than 10 times.");
        newListElement.appendChild(node);
        var element = document.getElementById("achievements");
        element.appendChild(newListElement);
        acheievments = "died-more-than-10";
    }
    else if (swordOfTree == true) {
        var newListElement = document.createElement("li");
        var node = document.createTextNode("-Friend of Trees");
        newListElement.appendChild(node);
        var element = document.getElementById("achievements");
        element.appendChild(newListElement);
        swordOfTree = false;
    }
    else if (princessSaved == true) {
        var newListElement = document.createElement("li");
        var node = document.createTextNode("-Princess Saver");
        newListElement.appendChild(node);
        var element = document.getElementById("achievements");
        element.appendChild(newListElement);
        princessSaved = false;
    }
    else if (seducer == true) {
        var newListElement = document.createElement("li");
        var node = document.createTextNode("-Seducer");
        newListElement.appendChild(node);
        var element = document.getElementById("achievements");
        element.appendChild(newListElement);
        seducer = false;
    }
}

//Resets inventory
function Reset() {
    //makes an array for skills
    for (var i = 0; i < skills.length; ++i) { 
            inventory[i] = false; 
    }
}

//Manages inventory
function InventoryManage() {
    if (BladeoftheRuinedking == true)
       document.getElementById("item1").innerHTML = "Blade of the Fallen King";

}
    