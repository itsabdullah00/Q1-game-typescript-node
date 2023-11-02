import inquirer from "inquirer";
let score = 0;
async function guessnum() {
    let guessnumber = Math.floor(Math.random() * 10);
    let hint;
    if (guessnumber % 2 === 0) {
        hint = "Number is even";
    }
    else {
        hint = "Number is odd";
    }
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "userguess",
            message: `Guess the number between 1 to 10 "${hint}". `
        }
    ]);
    console.log(`your guess is ${answer.userguess} and system generates ${guessnumber}`);
    if (answer.userguess === guessnumber) {
        score++;
        console.log(`Congratulation Your score is ${score}`);
    }
    else {
        console.log(`Wrong guess, Your score is ${score}.`);
    }
}
async function loophole() {
    let again;
    do {
        await guessnum();
        again = await inquirer.prompt([
            {
                type: "list",
                name: "restart",
                choices: ["Yes", "No"],
                message: "Select Option"
            }
        ]);
    } while (again.restart === "Yes");
}
loophole();
