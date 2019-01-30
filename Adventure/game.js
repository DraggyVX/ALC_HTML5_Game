/*
alert("Warning! Will Robinson...Warning!!");

confirm("Do you like pokemon?"); //Two options

prompt("What type of pokemon?"); //A written response
*/

//var playerName = prompt("What is your name traveller?");

//document.write(playerName);
//confirm(playerName + " what way do you want to go?");


Game();

function Game() {
    var PC = prompt("What is your name?");
    var input = document.getElementById('user-input'); 
    var output = document.getElementById('log-output');
    
    var game = document.createElement("theGame");
    var t = document.createTextNode("Hello " + PC + " I am the ghost that will be guilding you on your journey through this world!"); 
    game.appendChild(t);
    document.getElementById('log-output').appendChild(game);
    document.getElementById("user-input").value;
    car newListElement = document.createElement("li");
    
   // document.getElementById('log2').innerHTML = "Wakey wakey! its time to wake up!";
    //document.getElementById('log3')
    
}



/*

if(document.getElementById('log7') != null){
            document.getElementById('log1').innerHTML = document.getElementById('log2');
            document.getElementById('log2').innerHTML = document.getElementById('log3');
            document.getElementById('log3').innerHTML = document.getElementById('log4');
            document.getElementById('log4').innerHTML = document.getElementById('log5');
            document.getElementById('log5').innerHTML = document.getElementById('log6');
            document.getElementById('log6').innerHTML = document.getElementById('log7');
            document.getElementById('log7').innerHTML == null;
        }



function Node(data, N, E, S, W) {
    this.data = null;
    this.N = null;
    this.E = null;
    this.S = null;
    this.W = null;
}   

var readlineSync = require('readline-sync');
var fs = require("fs");

// Add some encouragement
var words = ["Why are you doing that!?", "What are you stupid?", "Um... you can't do that.", "Why?"];
var word = words[Math.floor(Math.random() * words.length)];

// Giving thanks
var thanks = ["Thanks!", "Nice one!"];
var thank = thanks[Math.floor(Math.random() * words.length)];

// Read in an animal decision tree
var tree = fs.readFileSync('answers.json'); // Answer for the game will need to make a new file for this
var root = JSON.parse(tree);
var node;

// Play the game
while (ask("Do you want to play?")) {
  node = root;
  go();
}

function go() {
  // If it's not a "terminal" node (i.e. animal)
  while (node.yes && node.no) {
    // Ask the question: Yes or No?
    if (ask(node.data)) {
      node = node.yes;
    } else {
      node = node.no;
    }
  }
  // We're at the end, guess!
  if (!ask("Is it a " + node.data + "?")) {
    // Wrong!
    train(node);
  } else {
    // Right!
    console.log(word);
  }
}

// Ask a question, return true for yes
function ask(question) {
  var answer = readlineSync.question(question + " (y/n): ").toUpperCase();
  return (answer.charAt(0) == "Y");
}

// Train a node to get the right answer
function train(node) {
  // The wrong guess
  var guess = node.data;
  // What is it?
  var answer = readlineSync.question("Ok, what are you? ");
  // Get a new question?
  var question = readlineSync.question("Suggest a yes/no question to distinguish a " + guess + " from a " + answer + ".\n");
  node.data = question;
  // Yes or no for that question
  if (ask("Answer for a " + answer + ": " + question)) {
    node.yes = new Node(answer);
    node.no = new Node(guess);
    console.log(thank);
    console.log ("Great! Now I know about " + answer + "s !");
    console.log(playAgainLoad);
  } else {
    node.yes = new Node(guess);
    node.no = new Node(answer);
    //adding it here did not gen a thanks
    //console.log(thank);
  }
  // Save back to the file
  var tree = JSON.stringify(root, null, 2);
  fs.writeFileSync('tree.json', tree);
}
*/


/*
Game();

function Game(){
    alert("Welcome to legend of the edgy teenager");
    var PC = prompt("What is your name?");
    
    Prison();
    
    functioin Prison() {
        var prison = prompt("You wake up to your head pounding. You look around and you see that you are under a tree in a plains. It appears you have teleported to another world. \n -look around \n -go to sleep \n -climb the tree").toLowerCase();
        
        if (prison == "look around" || prison == "look") {
            var prisonLook = prompt("You see a road going east to west towards the north. Further north you can faintly see what looks to be a swamp. To the east looks to be a small town. To the west you see nothing but fields of grass. Behind you, you see a dark spooky forest. \n -go to road \n -go into forest \n -go to the east \n -go towards the town \n -or go to sleep");
            
        }
        
        else if(prison == "go to sleep" || prison == "sleep") {
            alert("You fall back to sleep under the tree");
            var resume = confirm("Do you wish to continue?");
            
            if(resume)
                Prison();
            else{
                alert("Game Over!");
            }
        }
        else {
            alert("I don't know what " + prison + " is!");
            Prison();
        }
    }
}
*/