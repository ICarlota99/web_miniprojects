// Create dictionary with key-sound pairs
let drumSound = {
    "w":"sounds/tom_1.mp3",
    "a":"sounds/tom_2.mp3",
    "s":"sounds/tom_3.mp3",
    "d":"sounds/tom_4.mp3",
    "j":"sounds/bass.mp3",
    "k":"sounds/snare.mp3",
    "l":"sounds/clash.mp3",
};

// Count drum quantity
var drumCount = document.querySelectorAll(".drum").length;

// Play sound if clicked
for (var i = 0; i < drumCount; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var audio = new Audio(drumSound[this.innerHTML]);
        audio.play();
    })
}

// Play sound if keypress
document.addEventListener("keypress", function(event){
    var audio = new Audio(drumSound[event.key]);
        audio.play();
})