$(document).ready(function () {

    //set default variables
    var wins = 0;
    var losses = 0;
    var targetNumber = 0;
    var userScore = 0;

    function crystal(value) {
        this.value = value;
        this.generateValue = function () {
            //generate random value 1-12
            this.value = Math.floor(Math.random() * 12) + 1;
            console.log(this.value);
        };
    }

    var crystalOne = new crystal(0);
    var crystalTwo = new crystal(0);
    var crystalThree = new crystal(0);
    var crystalFour = new crystal(0);

    //generate initial crystal values
    crystalOne.generateValue();
    crystalTwo.generateValue();
    crystalThree.generateValue();
    crystalFour.generateValue();

    //generate initial target number
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

    //update values on page
    function updateContent() {
        $("#random-number").text(targetNumber);
        $("#total-score").text(userScore);
        $("#number-of-wins").text(wins);
        $("#number-of-losses").text(losses);
    }

    //update page with content for first game
    updateContent();

    //capture clicks on crystal and update score
    $("#crystal-1").click(function () {
        userScore+=crystalOne.value;
        $("#total-score").text(userScore);
        scoreGame();
    });

    $("#crystal-2").click(function () {
        userScore+=crystalTwo.value;
        $("#total-score").text(userScore);
        scoreGame();
    });

    $("#crystal-3").click(function () {
        userScore+=crystalThree.value;
        $("#total-score").text(userScore);
        scoreGame();
    });

    $("#crystal-4").click(function () {
        userScore+=crystalFour.value;
        $("#total-score").text(userScore);
        scoreGame();
    });

    function scoreGame() {
        if (userScore < targetNumber){
            return;
        }
        if (userScore == targetNumber){
            alert("You Win!");
            wins++;
            newGame();
        }
        else{
            alert("You Lose!");
            losses++;
            newGame();
        }
    }

    function newGame() {
        targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        userScore = 0;
        crystalOne.generateValue();
        crystalTwo.generateValue();
        crystalThree.generateValue();
        crystalFour.generateValue();
        updateContent();
    }

});
