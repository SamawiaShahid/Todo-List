import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "Todo",
            message: "What do you want to enter in your todo?"
        },
        {
            type: "",
            name: "addmore",
            message: " Do you want to add more todo?",
            default: false
        }
    ]);
    const { Todo, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (Todo) {
        todos.push(Todo);
    }
    else {
        console.log("Kindly add valid input");
    }
}
if (todos.length > 0) {
    console.log("Your todo list \n");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log("No todos found");
}
