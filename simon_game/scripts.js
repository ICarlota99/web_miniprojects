// Game Buttons
let buttonColour = ["red", "blue", "green", "yellow"];
let sounds = ["red", "blue", "green", "yellow"];

// Game Color Pattern
let gamePattern = [];

// User Pattern
let userClickedPattern = [];

// Game started
let start = false;

// Game level
let level = 0;


// User keypress
$(document).keypress(function(){
    if (!start){
        nextSequence();
        start = true;
    }
});


// User click 
$(".btn").click(function(){
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatepress(userChosenColour);
    checkPattern(userClickedPattern.length - 1);
});


// Check user input
function checkPattern(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern [currentLevel]){
        $("h1").text("Correct!");
        if (currentLevel === (level - 1)){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        $("h1").text("Game over");
        playSound("wrong");
        setTimeout(function(){
            $("h1").text("Press Any Key to Restart");
        }, 1500);
        // Restart game parameters
        start = false;
        level = 0;
        gamePattern = [];
    }
}

// Add Buttons to the game color pattern
function nextSequence(){
    userClickedPattern = [];

    // Show level to user
    level++;
    $("h1").text("Level " + level);

    // Set new sequence
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColour[randomNumber];
    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);
    animatepress(randomChosenColour);
}


// Button animations
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatepress(currentButton){
    $("#" + currentButton).addClass("pressed");

    setTimeout(function(){
      $("#" + currentButton).removeClass("pressed");
    }, 100);
}