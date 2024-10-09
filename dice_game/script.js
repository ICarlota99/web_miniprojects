let diceImages = {
    0: "images/1.png",
    1: "images/2.png",
    2: "images/3.png",
    3: "images/4.png",
    4: "images/5.png",
    5: "images/6.png",
};


document.querySelector("button").addEventListener("click", function(){
    var firstDice = Math.round(Math.random() * 5);
    var secondDice = Math.round(Math.random() * 5);
    document.querySelector(".first").setAttribute("src", diceImages[firstDice]);
    document.querySelector(".second").setAttribute("src", diceImages[secondDice]);

    if (firstDice > secondDice){
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    }
    else if (firstDice < secondDice){
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    }
    else{
        document.querySelector("h1").innerHTML = "It's a MATCH!";
    }
})