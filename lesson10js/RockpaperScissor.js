const choices = ["rock", "paper", "scissor"];
let userChoice = prompt("Enter rock, paper, or scissor:").toLowerCase();
if (!choices.includes(userChoice)) {
alert("Invalid choice! Please choose rock, paper, or scissor.");
} 
else {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    alert(`you chose: ${userChoice}, computer chose: ${computerChoice}`);
    if (userChoice === computerChoice) {
        alert("It's a draw!");
    }
    else if ((userChoice === "rock" && computerChoice === "scissor") ||
             (userChoice === "paper" && computerChoice === "rock") ||
             (userChoice === "scissor" && computerChoice === "paper")) {
        alert("You win!");
    } else {
        alert("Computer wins!");
    }  
}