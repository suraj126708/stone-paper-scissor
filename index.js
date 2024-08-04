let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
var heading = document.querySelector("h3");
var your =document.querySelector(".your-score");
var com = document.querySelector(".comp-score");

function gencompChoice() {

    const randomChoice = Math.floor(Math.random() * 3);
    
    var comchoice = ["rock", "paper", "scissor"];
    var computerchoice = comchoice[randomChoice];
    
    return computerchoice;
}


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

document.querySelector("button").addEventListener("click", function () {
    location.reload();
});

function playGame(userChoise) {

    console.log("user choice =" , userChoise)
    
    const computerchoiz = gencompChoice();
    console.log("computer choice =", computerchoiz);


    if (userChoise === computerchoiz) {
        heading.innerHTML = "Match draw ...";
        document.querySelector(".msg-box").style.backgroundColor = "pink";

    } else if (userChoise === "rock" && computerchoiz === "paper") {
        heading.innerHTML = "Computer Won ...";
        compScore++;
        com.innerHTML = compScore;
        document.querySelector(".msg-box").style.backgroundColor = "red";

    } else if (userChoise === "rock" && computerchoiz === "scissor") {
        heading.innerHTML = "user Won ...";
        userScore++;
        your.innerHTML = userScore;
        document.querySelector(".msg-box").style.backgroundColor = "green";

    
    } else if (userChoise === "paper" && computerchoiz === "rock") {
        heading.innerHTML = "User Won ...";
        userScore++;
        your.innerHTML = userScore;
        document.querySelector(".msg-box").style.backgroundColor = "green";

    } else if (userChoise === "paper" && computerchoiz === "scissor") {
        heading.innerHTML = "Computer Won ...";
        compScore++;
        com.innerHTML = compScore;
         document.querySelector(".msg-box").style.backgroundColor = "red";

    } else if (userChoise === "scissor" && computerchoiz === "paper") {
        heading.innerHTML = "User Won ...";
        userScore++;
        your.innerHTML = userScore;
        document.querySelector(".msg-box").style.backgroundColor = "green";

    } else if (userChoise === "scissor" && computerchoiz === "rock") {
        heading.innerHTML = "computer Won ...";
        compScore++;
        com.innerHTML = compScore;
        document.querySelector(".msg-box").style.backgroundColor = "red";

    } 


}