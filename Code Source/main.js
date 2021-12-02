let btn = document.getElementById('btn'); 
let output = document.getElementById("outputtext");
let nombre = parseInt((Math.random() * 100)+1);
let tentatives = 0;
let endGame = document.getElementById('input')

btn.addEventListener( 'click', function theProcess(){
    tentatives++;

    let input = Number(document.getElementById('userInput').value);
    if (input === nombre){ 
        if(tentatives == 1 || tentatives == 2){
            output.innerHTML = "Bravo, vous etes un Génie !!!";
            endGame.style.display="none";
        }
        else {
            output.innerHTML = "Félicitations, vous avez gagné après "+tentatives+"  tentatives";
            endGame.style.display="none";
        } 
    }
    else if (input < nombre){
        output.innerHTML =  "C'est raté !! Essay d'augmenter";
    }
        else if(input > nombre){
            output.innerHTML =  "C'est raté !! Essay de baisser";
    }
    if(tentatives == 10){
        endGame.style.display="none"
    }
});
