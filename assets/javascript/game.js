    //global variables, bad form
    var wins = 0;
    var losses = 0;
    var guessesremaining = 0;
    var guesses = [];
    var computerletter = "";

    function newround(){
        guesses = [];
        guessesremaining = 10;
        computerletter = String.fromCharCode(97 + Math.floor(Math.random() * 26));//generate random lower ASCII letter
    }

    function redraw(){
        document.getElementById("wins").innerHTML = wins.toString();
        document.getElementById("losses").innerHTML = losses.toString();
        document.getElementById("guesses-remaining").innerHTML = guessesremaining.toString();
        document.getElementById("guesses").innerHTML = guesses.toString();
    }

    window.onkeyup = function(e) {
        var playercode = e.keyCode;
        //check if valid key pressed (uppercase or lowercase letter) //keycodes are always lowercase
        if(((playercode >= 65) && (playercode <= 90))){// || ((playercode >= 97) && (playercode <= 122))){

            var playerguess = String.fromCharCode(e.keyCode);//.toLowerCase();//convert keypress to lowercase
            if(guesses.indexOf(playerguess) == -1) {
                guessesremaining--;//one less guess
                if (playerguess == computerletter) {
                    wins += 1;
                    newround();
                }
                else if (guessesremaining == 0) {
                    losses += 1;
                    newround();
                }
                else {//out of guesses
                    guesses.push(playerguess);
                }
                redraw();
            }
        }

    };